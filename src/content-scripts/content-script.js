console.log('Hello from the content-script')
let fromUnit = "$";
let toUnit = "£";

let allSpanLis = document.querySelectorAll('span');
let pNameLis = [];

for (var i = 0; i < allSpanLis.length; i++){
    let tempClassSet = allSpanLis[i].getAttribute("class");
    var isPrice = false;
    var tempClass;
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
        var isRecorded = false;
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


for(var a = 0; a< pNameLis.length; a++){
    var needChange = document.querySelectorAll("."+ pNameLis[a]);
    for(var b = 0; b < needChange.length; b++){
        document.querySelectorAll("."+ pNameLis[a])[b].innerHTML = "changed price";
    }
}