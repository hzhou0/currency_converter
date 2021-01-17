import {convert, get_rates, baseCurSym} from '@/util/rate'
import currency from "@/util/available-currency"
let replaceAsync = require("string-replace-async");

const ele = document.getElementsByTagName("*");
async function render() {
    for (let i = 0; i < ele.length; i++) {
        const childNodes = ele[i].childNodes;
        for (let j = 0; j < childNodes.length; j++) {
            if (childNodes[j].nodeType === 3) {
                // example on update a text node's value
                let placeHolder=childNodes[j].nodeValue
                placeHolder=await replaceAsync(placeHolder, /(\$)[\n\r\s]*([\d]+[.]*\d*)/g,
                    async (match, p1, p2)=> {
                    console.log(p2)
                        let con = await convert(p2, 'CAD')
                        while (!con) {
                            await get_rates();
                            con = await convert(p2, 'CAD')
                        }
                        return ("$" + con.toFixed(2));
                    });
               childNodes[j].nodeValue=placeHolder
            }
        }
    }
}
get_rates().then(()=>render()).then(()=>console.log('finished'));
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