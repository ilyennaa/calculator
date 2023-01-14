const buttonsSelector = document.querySelectorAll('.button');
const numberDisplay = document.querySelector('.number-display');

buttonsSelector.forEach((element) => {
    element.addEventListener("click", () => {
        idSelector = element.getAttribute('id');

        switch (idSelector) {
            case 'negative':
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


function operate(operator, num1, num2) {
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


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}