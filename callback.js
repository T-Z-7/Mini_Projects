

function sum(callback , x, y){
    let result = x + y;
    callback(result);

}

function display(result2){
   console.log(result2);
}

sum(display,1,2);