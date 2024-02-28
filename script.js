// VARIABLES

let a = 0;
let operator = "";
let b = 0;
let result = 0;

// FUNCTIONS

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

// Operate

function operate(a,operator,b) {

    if(operator == "+") {
        add(a,b);
    }

    if(operator == "-") {
        return subtract(a,b);
    }

    if(operator == "x" || operator == "*") {
        return multiply(a,b);
    }

    if(operator == "/") {
        return divide(a,b);
    }


    
}

let display = document.getElementById('display');

// Event listeners for buttons

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
let buttonAC = document.getElementById('AC');
let buttonEquals = document.getElementById('=');



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

// OPERATORS

buttonPlus.addEventListener('click', function() {
    a = parseFloat(display.value);
    operator = "+";
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

    // if(operator=="+") {
    //     let result = add(a,"+",b);
    //     console.log(result);
    //     display.value = result;
    // }
});



// TESTING
console.log(add(2,2));
console.log(subtract(2,2));
console.log(multiply(2,2));
console.log(divide(2,2));

console.log(operate(2,"+",5));
console.log(operate(2,"-",5));
console.log(operate(2,"x",5));
console.log(operate(2,"*",5));
console.log(operate(2,"/",5));