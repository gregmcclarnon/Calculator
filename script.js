// GLOBAL VARIABLES

let a = 0;
let operator = "";
let b = 0;
let result = 0;

// CALCULATOR FUNCTIONS
// The result is passed to the result variable

// ADD

function add(a,b) {
    result = a + b;
}

// SUBTRACT

function subtract(a,b) {
    result = a - b;
}

// MULTIPLY

function multiply(a,b) {
    result = a * b;
}

// DIVIDE

function divide(a,b) {
    result = a / b;
}

// OPERATE FUNCTION
// Looks at the operator and calls the correct CALCULATION function

function operate(a,operator,b) {
    if(operator == "+") {
        add(a,b);
    }

    if(operator == "-") {
        subtract(a,b);
    }

    if(operator == "x" || operator == "*") {
        multiply(a,b);
    }

    if(operator == "/") {
        divide(a,b);
    }    
}

// Assigns HTML elements to JS variables

let display = document.getElementById('display');

let button7 = document.getElementById('7');
let button8 = document.getElementById('8');
let button9 = document.getElementById('9');
let buttonMultiply = document.getElementById('x');

let button4 = document.getElementById('4');
let button5 = document.getElementById('5');
let button6 = document.getElementById('6');
let buttonSubtract = document.getElementById('-');

let button1 = document.getElementById('1');
let button2 = document.getElementById('2');
let button3 = document.getElementById('3');
let buttonPlus = document.getElementById('+');

let button0 = document.getElementById('0');
let buttonDot = document.getElementById('.');
let buttonDivide = document.getElementById('/');
let buttonAC = document.getElementById('AC');
let buttonEquals = document.getElementById('=');

// Creates event listeners for buttons and when clicked adds the value to the display

// NUMBERS

button1.addEventListener('click', function() {
    display.value += 1;
});

button2.addEventListener('click', function() {
    display.value += 2;
});

button3.addEventListener('click', function() {
    display.value += 3;
});

button4.addEventListener('click', function() {
    display.value += 4;
});

button5.addEventListener('click', function() {
    display.value += 5;
});

button6.addEventListener('click', function() {
    display.value += 6;
});

button7.addEventListener('click', function() {
    display.value += 7;
});

button8.addEventListener('click', function() {
    display.value += 8;
});

button9.addEventListener('click', function() {
    display.value += 9;
});

button0.addEventListener('click', function() {
    display.value += 0;
});

// DECIMAL and AC buttons

buttonDot.addEventListener('click', function() {
    display.value += ".";
    // Could introduce a bug. Should the . be a string or integer?
});

buttonAC.addEventListener('click', function() {
    display.value = "";
    a = "";
    b = "";
    operator = "";
});

// OPERATORS

buttonPlus.addEventListener('click', function() {
    a = parseFloat(display.value);
    operator = "+";
    console.log(a);
    console.log(operator);
    display.value = "";
});

buttonSubtract.addEventListener('click', function() {
    a = parseFloat(display.value);
    operator = "-";
    console.log(a);
    console.log(operator);
    display.value = "";
});

buttonMultiply.addEventListener('click', function() {
    a = parseFloat(display.value);
    operator = "*";
    console.log(a);
    console.log(operator);
    display.value = "";
});

buttonDivide.addEventListener('click', function() {
    a = parseFloat(display.value);
    operator = "/";
    console.log(a);
    console.log(operator);
    display.value = "";
});





// EQUALS

buttonEquals.addEventListener('click', function() {
    b = parseFloat(display.value);
    console.log(b);
    display.value = "";

    operate(a,operator,b);

    console.log(result);

    display.value = result;

});



// TESTING


// console.log(add(2,2));
// console.log(subtract(2,2));
// console.log(multiply(2,2));
// console.log(divide(2,2));

// console.log(operate(2,"+",5));
// console.log(operate(2,"-",5));
// console.log(operate(2,"x",5));
// console.log(operate(2,"*",5));
// console.log(operate(2,"/",5));