const numbers = [1,2,3,4,5,6];

const square = numbers.map(
    (element) => {
        return Math.pow(element,2);

    }
)

console.log(square);