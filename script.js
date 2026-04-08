
let firstNumber = '';
let secondNumber = '';
let onSecondNum = false;
let operator = '';
let display = '0';

const buttons = document.querySelectorAll('#Buttons button');

const result = document.querySelector('#result-value');

buttons.forEach((btn) => {``
    btn.addEventListener("click", () => {
        let value = btn.value;
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


        }else if(value === '*' || value === '/' || value === '+' || value === '-'){
            operator = value;
            onSecondNum = true;
            console.log(operator);
            console.log(onSecondNum);

        } else if (value === '=') {
            display = firstNumber;
            first = Number(firstNumber);
            second = Number(secondNumber);
            added = first + second;
            result.textContent = added;
            console.log("Testing values");
            console.log(firstNumber);
            console.log(operator);
            console.log(secondNumber);
            console.log(added);

            if(operator === '+') {
                console.log("Addition result: ", sum(first, second));
            } else if (operator === '-') {
                console.log("Subtraction result: ", subtract(first, second));
            } else if (operator === '*') {
                console.log("Multiplication result: ", multiply(first, second));
            } else if (operator === '/') {
                console.log("Division result: ", divide(first, second));
            }
        } else if(value === 'clear') {
            firstNumber = '';
            secondNumber = '';
            onSecondNum = false;
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

