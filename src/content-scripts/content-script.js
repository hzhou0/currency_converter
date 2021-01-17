import {convert, get_rates, baseCurSym} from '@/util/rate'
import defaults from "@/util/defaults.json"
import currency from "@/util/available-currency"
import replaceAsync from "string-replace-async"
import _ from "lodash"

let baseCur


const ele = document.getElementsByTagName("*");

async function render() {
    for (let i = 0; i < ele.length; i++) {
        const childNodes = ele[i].childNodes;
        for (let j = 0; j < childNodes.length; j++) {
            if (childNodes[j].nodeType === 3) {
                // example on update a text node's value
                let placeHolder = childNodes[j].nodeValue
                for (let index in currency) {
                    let each = currency[index]
                    let regex = new RegExp(`(${_.escapeRegExp(each.symbol)})[\\s\\n\\r]*([\\d]+[.]*\\d*)`, 'g')
                    placeHolder = await replaceAsync(placeHolder, regex,
                        async (match, p1, p2) => {
                            let con = await convert(p2, each.code)
                            if (!con) {
                                return match
                            }
                            return (defaults.TOKEN + con.toFixed(2));
                        });
                }
                for (let index in currency) {
                    let each = currency[index]
                    let regex = new RegExp(`(${_.escapeRegExp(each.symbol_native)})[\\s\\n\\r]*([\\d]+[.]*\\d*)`, 'g')
                    if(each.symbol_native==="$"){
                        regex = new RegExp(/(\$)[\s\n\r]*([\d]+[.]*\d*)/g)
                    }
                    if (each.code === defaults.DOLLAR || each.symbol_native !== "$") {
                        placeHolder = await replaceAsync(placeHolder, regex,
                            async (match, p1, p2) => {
                            console.log(match)
                                let con = await convert(p2, each.code)
                                if (!con) {
                                    return match
                                }
                                return (defaults.TOKEN + con.toFixed(2));
                            });
                    }
                }
                placeHolder = placeHolder.replaceAll(defaults.TOKEN, baseCur.symbol_native)
                childNodes[j].nodeValue = placeHolder

            }
        }
    }
}

baseCurSym().then(e => baseCur = currency[e]).then(() => get_rates().then(() => render()).then(() => console.log('finished')));
/*
let allSpanLis = document.querySelectorAll('span');
let pNameLis = [];

for (let i = 0; i < allSpanLis.length; i++){
    let tempClassSet = allSpanLis[i].getAttribute("class");
    let isPrice = false;
    let tempClass;
    if (tempClassSet !== null){
        tempClass = tempClassSet.split(" ")[0];
        for (let j = 0; j<=tempClass.length; j++) {
            if (tempClass.substring(j, j+5).toLowerCase() === "price"){
                isPrice = true;
                break;
            }
        }
    }

    if (isPrice){
        let isRecorded = false;
        for (let k = 0; k<= pNameLis.length; k++) {
            if (pNameLis[k] === tempClass){
                isRecorded = true;
                break;
            }
        } if (!isRecorded){
            pNameLis.push(tempClass);
        }
    }
}

console.log(pNameLis);

for(let a = 0; a< pNameLis.length; a++){
    const needChange = document.querySelectorAll("." + pNameLis[a]);
    for(let b = 0; b < needChange.length; b++){
        document.querySelectorAll("."+ pNameLis[a])[b].innerHTML = "changed price";
    }
}*/