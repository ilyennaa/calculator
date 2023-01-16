const buttonsSelector = document.querySelectorAll('.button');
const operatorSelector = document.querySelectorAll('.operator');
const numberDisplay = document.querySelector('.number-display');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

let total = 0;

clearButton.addEventListener("click", () => {
    clearDisplay();
});

// place an event listener onto each button
// that has class '.button'
buttonsSelector.forEach((element) => {
    element.addEventListener("click", () => {
        idSelector = element.getAttribute('id');

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

operatorSelector.forEach((element) => {
    element.addEventListener("click", () => {
        let numberInDisplay = Number(numberDisplay.value);

        // store the first number in a variable
        let firstNumber = numberInDisplay;

        // store the operator symbol in a variable
        const operatorSymbol = element.innerHTML;
        
        // store the second number in a variable
        
        // call the operate function
        // display the total to the numberDisplay
        

    });
});


// clears the number display
const clearDisplay = () => {
    numberDisplay.value = '';
    total = 0;
}

// general 'operate' function
const operate = (operator, num1, num2) => {
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