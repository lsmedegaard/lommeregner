let first_input;
let second_input;

document.querySelector("#firstnumber").addEventListener("input", firstNumber);
function firstNumber(){
    first_input = this.value;
    console.log("first input = " + first_input);
}

document.querySelector("#secondnumber").addEventListener("input", secondNumber);
function secondNumber(){   
    second_input = this.value;
    console.log("second input = " + second_input);
}