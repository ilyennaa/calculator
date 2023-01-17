let firstNumber = 0;
let operator = '';
let secondNumber = 0;
let total = 0;
let isSeconDaryDisplayFull = false;

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const decimalButton = document.querySelector('.decimal');
const clearButton = document.querySelector('.clear-button');
const mainDisplay = document.getElementById('main-number-display');
const secondaryDisplay = document.getElementById('secondary-number-display');

const displayNumber = (element) => {
    mainDisplay.textContent += element.target.textContent;
}

const setOperator = (element) => {
    firstNumber = mainDisplay.textContent;
    operator = element.target.textContent;
    secondaryDisplay.textContent = `${firstNumber} ${operator} `;
    mainDisplay.textContent = '';
    isSeconDaryDisplayFull = true;
}

const evaluate = () => {
    if (isSeconDaryDisplayFull === false) return;
    if (operator === '/' && mainDisplay.textContent === '0') divideByZero();
    secondNumber = mainDisplay.textContent;
    secondaryDisplay.textContent += secondNumber;
    total = operate(Number(firstNumber), Number(secondNumber), operator);
    secondaryDisplay.textContent += ' = ';
    mainDisplay.textContent = total;
}

const clearScreens = () => {
    isSeconDaryDisplayFull = false;
    mainDisplay.textContent = '';
    secondaryDisplay.textContent = '';
    firstNumber = 0;
    operator = '';
    secondNumber = 0;
    total = 0;
}

const addDecimal = () => {
    if (mainDisplay.textContent === '') mainDisplay.textContent += "0";
    mainDisplay.textContent += ".";
}

const divideByZero = () => {
    alert("You can't divide by zero, idiot!");
    clearScreens();
}

numberButtons.forEach((element) => 
    element.addEventListener("click", displayNumber)
);

operatorButtons.forEach((element) => {
    element.addEventListener("click", setOperator)
});

equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clearScreens);
decimalButton.addEventListener("click", addDecimal);


const operate = (firstNumber, secondNumber, operator) => {
    switch(operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
    }
}

// basic operation functions
const add = (num1, num2) => {return num1 + num2};
const subtract = (num1, num2) => {return num1 - num2};
const multiply = (num1, num2) => {return num1 * num2};
const divide = (num1, num2) => {return num1 / num2};