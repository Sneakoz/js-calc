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
        if (!operatorPressed) {
            operator = button.textContent;
            operatorPressed = true;
            console.log(operator);
        }
    });
});

// Create event listner for the equal button and add functionality
clearBtn.addEventListener('click', () => {
    operate(firstNum, secondNum, operator);
})

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
};

// Create the operator functions
function add(a, b) {
    display.textContent = a + b;
};

function subtract(a, b) {
    display.textContent = a - b;
};

function multiply(a, b) {
    display.textContent = a * b;
};

function divide(a , b) {
    display.textContent = a / b;
};
