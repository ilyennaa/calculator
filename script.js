



const operate = (firstNumber, operator, secondNumber) => {
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