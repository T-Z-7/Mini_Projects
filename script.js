const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function caculate(){
    display.value = eval(display.value); // caculate the value that appers on display.
}

