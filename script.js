let first_input;
let second_input;
let calculation; 
let rounding;

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
    console.log("multiplikation = " + calculation);
   }
   if(operator === "div"){  
    calculation = first_input / second_input;
    console.log("division = " + calculation);
   }

   

   showCalc();
}

//check for rounding 
document.querySelector("#doround").addEventListener("change", checkRounding);

function checkRounding() {
    
    if (this.checked) {
      console.log("rounding is on");
      rounding = "roundingOn";
    } else {
      console.log("rounding is off");
      rounding = "roundingOff";
    }
  };

function showCalc(){
    console.log("showing calculation");
if(rounding = "roundingOn"){
   
    let roundingValue = document.querySelector("#decimals").value;
    calculation = calculation.toFixed(roundingValue);
    console.log("rounding on with " + roundingValue + " decimals");
}
    let list = document.querySelector("ul");
    calculation = document.createTextNode(calculation);
    list.appendChild(calculation);
    let br = document.createElement("br");
    list.appendChild(br);
    list.scrollTop = list.scrollHeight;
}

