// Create the number and operator variables
let firstNum = '';
let secondNum = '';
let operator;
let operatorUsed = false;
let result;

// Import the buttons and display
const numButtons = document.querySelectorAll('.number');
const opButtons = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');
const display = document.querySelector('.display');

// Create event listeners for the numButtons
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        let text = button.textContent;
        if (operatorUsed == false) {
            firstNum += text;
            display.textContent = firstNum;
        } else {
            secondNum += text;
            display.textContent = secondNum;
        }
    });
});

// Create event listeners for operator buttons
opButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        if (!operatorUsed) {
            operator = button.textContent;
            operatorUsed = true;
        };
    });
});

// Create event listner for the equal button
equalBtn.addEventListener('click', () => {
    operate(firstNum, secondNum, operator);
    firstNum = result;
    secondNum = '';
    operatorUsed = false;
});

// Create event listner for the clear button
clearBtn.addEventListener('click', () => {
    display.textContent = 0;
    firstNum = '';
    secondNum = '';
    operator = '';
    operatorUsed = false;
    result = '';
});

// Create the operate function
function operate(first, second, op) {
    if(op == '+') {
        add(first, second);
    } else if(op == '-') {
        subtract(first, second);
    } else if(op == 'x') {
        multiply(first, second);
    } else {
        divide(first, second);
    };
    display.textContent = result;
};

// Create the operator functions
function add(a, b) {
    result = Number(a) +  Number(b);
};

function subtract(a, b) {
    result = a - b;
};

function multiply(a, b) {
    result = a * b;
};

function divide(a , b) {
    result = a / b;
};
