// Create the number and operator variables
let firstNum;
let secondNum;
let operator;

// Import the buttons
const numButtons = document.querySelectorAll('.number');
const sumBtn = document.querySelector('#sum');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');

// Create event listeners for the buttons
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        let text = button.textContent;
        console.log(text);
    })
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
