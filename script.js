let firstNumber = 0;
let operator = '';
let secondNumber = 0;
let total = 0;
let secondaryDisplayFull = false;

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const decimalButton = document.querySelector('.decimal');
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
    secondaryDisplayFull = true;
}

const evaluate = () => {
    secondNumber = mainDisplay.textContent;
    secondaryDisplay.textContent += secondNumber;
    total = operate(Number(firstNumber), Number(secondNumber), operator);
    mainDisplay.textContent = total;
}

numberButtons.forEach((element) => 
    element.addEventListener("click", displayNumber)
);

operatorButtons.forEach((element) => {
    element.addEventListener("click", setOperator)
});

equalsButton.addEventListener("click", evaluate);

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