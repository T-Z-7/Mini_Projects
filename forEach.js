let fruits = ["orange", "banana" , "apple", "pineapple"];

fruits.forEach(capitalize);
fruits.forEach(display);

function display(element){
  console.log(element);
}

function upperCase(element,index,array){
    array[index]=element.toUpperCase();
}

function capitalize(element,index,array){
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
}

function lowerCase(element,index,array){
    array[index]=element.toLowerCase();
}