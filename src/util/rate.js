import axios from "axios";
import defaults from "@/util/defaults.json"

export function baseCurSym() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(['outputCurrency'], function (result) {
            if (result.outputCurrency) {
                resolve(result.outputCurrency);
            } else {
                resolve(defaults.CUR_SYMBOL);
            }

        });
    })
}

export async function convert(curAmount, curSymbol) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['rates'], async function (result) {
            if (result.rates[curSymbol]) {
                resolve(result.rates[curSymbol] * curAmount)
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
        chrome.storage.local.set(res.data, () => {
            resolve(true)
        })
    })
}
