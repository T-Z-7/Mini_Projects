// .reduce() = reduce the element of an array to a single value.

const marks = [70,45,60,80,59,43];

const result = marks.reduce(maxNum);

function maxNum(previous,next){
    return Math.max(previous,next);
}

function minNum(previous,next){
    return Math.min(previous,next);
}

console.log(result);