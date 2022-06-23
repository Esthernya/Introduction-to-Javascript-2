const operator = prompt('Enter operator(either +, -, * or /): ');

const number1 = parseFloat(prompt ('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    console.log(number1 + number2)
}
else if (operator == '-') {
    console.log(number1 - number2)
}
else if (operator == '*') {
    console.log(number1 * number2)
}
else {
    console.log(number1 / number2)
}