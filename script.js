const buttonsSelector = document.querySelectorAll('.button');
const operatorSelector = document.querySelectorAll('.operator');
const numberDisplay = document.querySelector('.number-display');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

let total = 0;
let solutionArray = [];

clearButton.addEventListener("click", () => {
    clearDisplay();
});

// place an event listener onto each button
// that has class '.button'
buttonsSelector.forEach((element) => {
    element.addEventListener("click", () => {
        idSelector = element.innerHTML;
        solutionArray.push(idSelector);


        switch (idSelector) {
            case 'negative':
                // convert numberDisplay value to a number
                let numberInDisplay = Number(numberDisplay.value);

                // if numberInDisplay is greater than zero, convert it to
                // negative, else convert it to positive
                if (numberInDisplay > 0) {
                    numberInDisplay = -Math.abs(numberInDisplay);
                } else {
                    numberInDisplay = Math.abs(numberInDisplay);
                }

                numberDisplay.value = '';
                numberDisplay.value += `${numberInDisplay.toString()}`;
                break;

            case 'decimal':
                numberDisplay.value += '.';
                break;

            case '0':
                if (numberDisplay.value == '') {
                    break;
                }

            default:
                numberDisplay.value += `${idSelector}`;
        } 
    });
});


// clears the number display
const clearDisplay = () => {
    numberDisplay.value = '';
    total = 0;
}

// general 'operate' function
const operate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

// basic arithmetic functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;