
let simpleID;
function timer(){
    simpleID =  setTimeout(() => {
        window.alert("Hello World!")
    },3000);
    console.log("Start")
}

function clear(){
    clearTimeout(simpleID);
    console.log("Cancle")
}

