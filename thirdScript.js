const display = document.getElementById("display")
const display1 = document.getElementById("display1")
const display2 = document.getElementById("display2")
let areaType = 2;
let x;
let y;
let xy
let z;

function appendToDisplay(input){
    console.log("pressed a key, current areaType V")
    console.log(areaType);
    display.value += input; 
    calculate();
}
function appendToDisplay1(input){
    display1.value += input; 
    calculate1();
}

function calculateRectangleArea(){
    areaType = 1;
    console.log("changed to rectangle, current areaType V")
    console.log(areaType);
}
function calculateTriangleArea(){
    areaType = 2;
    console.log("changed to triangle, current areaType V")
    console.log(areaType);
}
function calculateCircleArea(){
    areaType = 3;
    console.log("changed to circle, current areaType V")
    console.log(areaType);
}

function calculate(){
    x = display.value;
    actualyCalculate();
}
function calculate1(){
    y = display1.value;
    actualyCalculate();
}

function actualyCalculate(){
    console.log("check area type V")
    console.log("area type: ")
    console.log(areaType)
    if(areaType == 1){
        console.log("calculating rectangle area");
        z = y * x;
        z = Math.round(z * 1000) / 1000;
        display2.value = z;
    } 
    if(areaType == 2){
        console.log("calculating triangle area");
        xy= x * y;
        z = xy / 2;
        z = Math.round(z * 1000) / 1000;
        display2.value = z;
    }
    if(areaType == 3){
        console.log("calculating circle area");
        z = Math.PI * Math.pow(x, 2);
        z = Math.round(z * 1000) / 1000;
        display2.value = z;
    }


}
function clearDisplay(){
    display.value = "";
    display2.value = "";
    x = "";
    z= "";
}
function clearDisplay1(){
    display1.value = "";
    display2.value = "";
    y = "";
    z= "";
}
