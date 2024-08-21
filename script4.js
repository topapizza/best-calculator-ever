const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input; 
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = Math.sqrt(display.value);
} 