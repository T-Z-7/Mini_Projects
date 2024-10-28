// function expression = a way to define function as value or variables 


const numbers = [1,2,4,5,5,62,4];

const result = numbers.filter(function(element){
    return element % 2 === 0;
})

const total = numbers.reduce(function(previous,next){
    return previous + next;
})

console.log(total);