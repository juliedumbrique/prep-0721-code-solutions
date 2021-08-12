function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log(sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return ('"' + 'Hello ' + name + '!' + '"');
}

var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var multiply = addAndMultiplyBy5(10, 5);
console.log(multiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var divide = multiplyAndDivideBy5(35, 10);
console.log(divide);

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}

var subtract = subtractTwoNumbers(22, 7);
console.log(subtract);

function getCircleCircumference(radius) {
  return radius * 2 * 3.141592653589793;
}

var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var name = getFullName('Juan', 'Ramirez');
console.log(name);

function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5);
console.log(cubeResult);
