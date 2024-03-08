// Create the number and operator variables
let firstNum = '';
let secondNum = '';
let operator;
let operatorPressed = false;

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
        if (operatorPressed == false) {
            firstNum += text;
            console.log(firstNum);
        } else {
            secondNum += text;
            console.log(secondNum);
        }
    });
});

// Create event listeners for operator buttons
opButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        if (!operatorPressed) {
            operator = button.textContent;
            operatorPressed = true;
            console.log(operator);
        }
    });
});

// Create the operate function
function operate(first, second, op) {
    return add(first, second);
};

// Create the operator functions
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a , b) {
    return a / b;
};
