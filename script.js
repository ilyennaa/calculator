const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const buttonMinus = document.getElementById('minus');

const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const buttonMultiply = document.getElementById('multiply');

const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const buttonDivide = document.getElementById('divide');

const buttonNegative = document.getElementById('1');
const button0 = document.getElementById('2');
const buttonDecimal = document.getElementById('3');
const buttonPlus = document.getElementById('plus');


const numberDisplay = document.querySelector('.number-display');


button1.addEventListener("click", ()=> {
    numberDisplay.value += "1";
});
button2.addEventListener("click", ()=> {
    numberDisplay.value += "2";
});
button3.addEventListener("click", ()=> {
    numberDisplay.value += "3";
});

button4.addEventListener("click", ()=> {
    numberDisplay.value += "4";
});
button5.addEventListener("click", ()=> {
    numberDisplay.value += "5";
});
button6.addEventListener("click", ()=> {
    numberDisplay.value += "6";
});

button7.addEventListener("click", ()=> {
    numberDisplay.value += "7";
});
button8.addEventListener("click", ()=> {
    numberDisplay.value += "8";
});
button9.addEventListener("click", ()=> {
    numberDisplay.value += "9";
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