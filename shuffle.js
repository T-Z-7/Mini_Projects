const Cards = ["A",2,3,4,5,6,7,8,9,"j","Q","K"];

shuffle(Cards);

console.log(Cards)

function shuffle(array){
    for(let i = array.length - 1; i > 0 ; i--){
        const random = Math.floor(Math.random() * (i + 1));

       [array[i],array[random] = array[random], array[i]]
    }
}



