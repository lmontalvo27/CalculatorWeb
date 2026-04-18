
let firstNumber = '';
let secondNumber = '';
let onSecondNum = false;
let operator = '';
let display = '0';
let firstHasDecimal = false;
let secondHasDecimal = false;

const buttons = document.querySelectorAll('#Buttons button');

const result = document.querySelector('#result-value');

buttons.forEach((btn) => {``
    btn.addEventListener("click", () => {
        let value = btn.value;
        result.textContent = value;
        //let currentInput = '';

        if(!isNaN(value) && onSecondNum === false) {
            firstNumber += value;
            console.log("On first Number")
            console.log(onSecondNum);
            
        } 
        
        if(!isNaN(value) && onSecondNum === true) {
            secondNumber += value;
            console.log("On second Number")
            console.log(onSecondNum);


        }
        else if (value === ".") {
            if (onSecondNum === true && secondHasDecimal === false){
                secondNumber += value;
                secondHasDecimal = true;

            } else {
                if(firstHasDecimal === false){
                    firstNumber += value;
                    firstHasDecimal = true;
                }
                
            }


        } else if(value === '*' || value === '/' || value === '+' || value === '-'){
            operator = value;
            onSecondNum = true;
            console.log(operator);
            console.log(onSecondNum);

        } else if (value === '=') {
            display = firstNumber;
            first = Number(firstNumber);
            second = Number(secondNumber);

            if(operator === '+') {
                let sumRes = sum(first, second);
                result.textContent = sumRes;
                console.log("Addition result: ", sumRes);
            } else if (operator === '-') {
                let subRes = subtract(first, second);
                result.textContent = subRes;
                console.log("Subtraction result: ", subRes);
            } else if (operator === '*') {
                let multRes =  multiply(first, second);
                result.textContent = multRes;
                console.log("Multiplication result: ", multRes);
            } else if (operator === '/') {
                if (secondNumber === 0) {
                    console.log("Second num is 0");
                    result.textContent = "Error"
                } else {
                
                    let divRes = divide(first, second);
                result.textContent = divRes;
                console.log("Division result: ", divRes);
                }
                
            }
        } else if(value === 'clear') {
            firstNumber = '';
            secondNumber = '';
            onSecondNum = false;
            firstHasDecimal = false;
            secondHasDecimal = false;
            operator = '';
            result.textContent = '0';
        }
    });
});



function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, val1, val2) {

    // grab the operator based on the operator from the button clickde
    // call functions and do math operation
    let opResult = 0;

    return opResult;
}

