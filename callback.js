
function one(two,x,y){
    let result = x + y;
    two(result);
}

function two(result2){
    console.log(result2);
}

one(two,4,5);