/*********************************************************************
 *                Calculator: A JavaScript Implementation            *
 * PLEASE DO NOT MODIFY THE CODE THE SECTION LABELED AS UNMODIFIABLE *
 * CIS 5620: Authoring Websites                                      *
 *********************************************************************/

/*
  Avoid creating global variables by implementing all the application
  inside an Immediately Invoked Function Expression (IIFE).
*/
(() => {

  /******************************************
   *          UNMODIFIABLE SECTION          *
   * DO NOT MODIFY THE CODE IN THIS SECTION *
   ******************************************/

  /**
  Add event listeners to each operator button in the interface.
  @returns No value.
  */
  function addCalculatorListeners() {
    for (let calcFunction of [clear, add, substract, multiply, divide, calculate]) {
      const control = document.querySelector("#" + calcFunction.name);
      control.addEventListener('click', calcFunction);
    }
  }

  // Add event listeners
  addCalculatorListeners();

  /******************************************
   *       END OF UNMODIFIABLE SECTION      *
   ******************************************/  

// Store first value
let firstValue = 0;
 
  let operator = null;
 
 /**
  Resets the calculator to its initial state.
  @returns No value.
  */  
  function clear() {
    console.log("CLEAR");
    document.getElementById("operand").value = '';
  }

 /**
  Performs the addition operation.
  @returns No value.
  */
  function add() {
    console.log("ADD");
   
    // Step 1: Exract the first value from the input box
    firstValue = parseInt(document.querySelector("#operand").value);
    // Step 2: Store the first value
   
    operator = '+';

  }

 /**
  Performs the substraction operation.
  @returns No value.
  */  
  function substract() {
    console.log("SUBSTRACT");
     firstValue = parseInt(document.querySelector("#operand").value);
         operator = '-';
  }

 /**
  Performs the multiplication operation.
  @returns No value.
  */    
  function multiply() {
    console.log(" MULTIPLY");
    firstValue = parseInt(document.querySelector("#operand").value);
         operator = '*';
  }

 /**
  Performs the division operation.
  @returns No value.
  */    
  function divide() {
    console.log("DIVIDE");
     firstValue = parseInt(document.querySelector("#operand").value);
         operator = '/';
  }

 /**
  Handles the "=" operator.
  @returns No value.
  */    
  function calculate() {
    console.log("CALCULATE");
   
    // Step 1: Extract the second value from the input box
    let secondValue = parseInt(document.querySelector("#operand").value);
   
    let result = 0;
   
    if(operator == '+') {
        // Step 2: Add first and second values
    result = firstValue + secondValue;
    }
   if(operator == '-'){
   result = firstValue - secondValue;
   }
   if(operator == '*'){
   result = firstValue * secondValue;
   }
   if(operator == '/'){
   result = firstValue / secondValue;
   }
    // Step 3: Display the result
    console.log (result)
     document.getElementById("operand").value = result
  }

})();