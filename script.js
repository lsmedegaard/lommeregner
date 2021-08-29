let first_input;
let second_input;
let calculation; 

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

   let operator = document.querySelector("#operator").value
   console.log(operator);

   if(operator === "add"){  
    calculation = first_input + second_input;
    console.log("sum = " + calculation);
   }

   if(operator === "sub"){  
    calculation = first_input - second_input;
    console.log("substration = " + calculation);
   }

   if(operator === "mul"){  
    calculation = first_input * second_input;
    console.log("substration = " + calculation);
   }
   if(operator === "div"){  
    calculation = first_input / second_input;
    console.log("substration = " + calculation);
   }

   showCalc();
}

function showCalc(){
    console.log("showing calculation")
    document.querySelector("#results li:last-child").textContent = calculation;
}

