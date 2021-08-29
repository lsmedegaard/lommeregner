let first_input;
let second_input;
let sum;

document.querySelector("#firstnumber").addEventListener("input", firstNumber);

function firstNumber(){
    first_input = parseInt(this.value);
    console.log("first input = " + first_input);
}

document.querySelector("#secondnumber").addEventListener("input", secondNumber);

function secondNumber(){   
    second_input =  parseInt(this.value); 
    console.log("second input = " + second_input);
}

document.querySelector("#calculate").addEventListener("click", calculateNumbers);

function calculateNumbers(){
    sum = first_input + second_input;
    console.log("sum = " + sum);
    showCalc();
}

function showCalc(){
    console.log("showing calculation")
    document.querySelector("#results li:last-child").textContent = sum;
}