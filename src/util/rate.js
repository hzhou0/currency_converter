import axios from "axios";
import defaults from "@/util/defaults.json"

export function baseCurSym() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(['outputCurrency'], function (result) {
            if (result.outputCurrency) {
                resolve(result.outputCurrency);
            } else {
                resolve(defaults.BASE_CUR_SYMBOL);
            }

        });
    })
}
export function dollarSym(){
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(['dollar'], function (result) {
            if (result.Dollar) {
                resolve(result.Dollar);
            } else {
                resolve(defaults.DOLLAR);
            }
        });
    })
}

export async function convert(curAmount, curSymbol) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['rates'], async function (result) {
            if (result.rates[curSymbol]) {
                resolve(curAmount / result.rates[curSymbol])
            } else {
                resolve(false)
            }
        })
    })
}

export async function get_rates() {
    const outputCurrency = await baseCurSym()
    let res = await axios.get(defaults.API, {
        params: {
            base: outputCurrency
        }
    })
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.local.set(res.data, () => {
                resolve(true)
            })
        } catch (e) {
            console.log(e)
        }
    })
}
