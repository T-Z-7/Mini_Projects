// .filter() = creates a new array by filtering out elements


const fruits = ['apple', 'mango', 'grape', "pineApple", 'orange'];

function wordLength(element){
  return element.length > 5;
}

const result = fruits.filter(wordLength);
console.log(result);