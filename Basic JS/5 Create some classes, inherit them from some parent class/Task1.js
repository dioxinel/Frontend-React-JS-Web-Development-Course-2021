function Calculator() {
}
Calculator.prototype.sum = (a, b) => a + b; 
Calculator.prototype.subtract = (a, b) => a - b;

function AdvancedCalculator() {
}
AdvancedCalculator.prototype = Object.create(Calculator.prototype);
AdvancedCalculator.prototype.multiply = (a, b) => a * b;
AdvancedCalculator.prototype.divide = (a, b) => a / b;

const calc = new AdvancedCalculator()
console.log(calc.sum(2, 21))
console.log(calc.subtract(2, 21))
console.log(calc.multiply(2, 21))
console.log(calc.divide(2, 21))