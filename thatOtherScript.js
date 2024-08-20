const display = document.getElementById("display");
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
let x;
let y;
let xSquared;
let ySquared;
let z;

function appendToDisplay(input){
    display.value += input; 
    calculate();
}
function appendToDisplay1(input){
    display1.value += input; 
    calculate1();
}
function clearDisplay(){
    display.value = "";
    display2.value = "";
}
function clearDisplay1(){
    display1.value = "";
    display2.value = "";
}

function calculate(){
    console.log("Pitäis toimia tähän mennessä");
    x = display.value;
    console.log(x);
    actualyCalculate();
}

function calculate1(){
    console.log("toimii tääki");
    y = display1.value;
    console.log(y);
    actualyCalculate();
}

function actualyCalculate(){
    xSquared = Math.pow(x, 2)
    ySquared = Math.pow(y, 2);
    console.log(xSquared);
    z = xSquared + ySquared;
    console.log(z);
    z = Math.sqrt(z);
    console.log(z);
    display2.value = z;
}