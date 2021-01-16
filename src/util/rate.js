import axios from "axios";
import defaults from "@/util/defaults.json"
function getBaseCurrency(){
    chrome.storage.sync.get(['outputCurrency'], function (result) {
        if (chrome.run.lastError) {
            return defaults.CUR_SYMBOL;
        }
        return result.key;
    });
}
function convert(curAmount, curSymbol) {
    const outputCurrency=getBaseCurrency()
    chrome.storage.local.get([curSymbol], function (result) {
        if (chrome.run.lastError) {
            return axios.get(defaults.API, {
                params: {
                    symbols: curSymbol,
                    base: outputCurrency
                }
            }).then(res=>
               res.data[outputCurrency]*curAmount
            )
        }
        else{
            return result.key*curAmount;
        }
    });
}
function get_rates(){
    const outputCurrency=getBaseCurrency()
    axios.get(defaults.API, {
        params: {
            base: outputCurrency
        }
    }).then(res=>
        chrome.storage.local.set(res.data, ()=>{})
    )

}