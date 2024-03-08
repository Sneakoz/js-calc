// Create the number and operator variables
let firstNum = '';
let secondNum = '';
let operator = '';
let operatorPressed = false;

// Import the buttons
const numButtons = document.querySelectorAll('.number');
const opButtons = document.querySelectorAll('.operator');
const sumBtn = document.querySelector('#sum');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');

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
        operator = opButtons.textContent;
        operatorPressed = true;
        console.log(operator);
    });
});

// subtractBtn.addEventListener('click', () => );
// subtractBtn.addEventListener('click', () => );
// subtractBtn.addEventListener('click', () => );
// subtractBtn.addEventListener('click', () => );

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
