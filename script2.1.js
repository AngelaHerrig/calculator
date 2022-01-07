"use strict";

// const calculater = {
//   pi: 3.141592653589793,
//   e: 2.718281828459045,
//   ratio: function (x, y, width) {
//     return (width / x) * y;
//   },
//   percentage: function (x, y) {
//     return `${(x * 100) / y}% `;
//   },
//   add: function (x, y) {
//     return x + y;
//   },
//   substract: function (x, y) {
//     return x - y;
//   },
//   multiply: function (x, y) {
//     return x * y;
//   },
//   divide: function (x, y) {
//     if (y == 0) {
//       return `Divisor shouldn't be 0`;
//     } else {
//       return x / y;
//     }
//   },
//   modulation: function (x, y) {
//     if (y == 0) {
//       return `Divisor shouldn't be 0`;
//     } else {
//       return x % y;
//     }
//   },
//   elevate: function (x, y) {
//     return Math.pow(x, y);
//   },
//   sqrt: function (x) {
//     return Math.sqrt(x);
//   },
// };

// console.log(calculate.add(calculate.pi, 5));
// console.log(calculate.ratio(13, 5, 200));

///////////////////

let input = document.querySelector(".result");
console.log(input);
const reset = document.querySelector(".btn--del");
const check = document.querySelector(".btn--check");

const pi = document.querySelector(".btn--pi");
const e = document.querySelector(".btn--e");
const percentage = document.querySelector(".btn--percentage");
const x = document.querySelector(".btn--x");
const sqrt = document.querySelector(".btn--sqrt");
const elevate = document.querySelector(".btn--elevate");
const ratio = document.querySelector(".btn--ratio");
const modulation = document.querySelector(".btn--modulation");

// const zero = document.getElementById("zero");
// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");
// const four = document.getElementById("four");
// const five = document.getElementById("five");
// const six = document.getElementById("six");
// const seven = document.getElementById("seven");
// const eigth = document.getElementById("eigth");
// const nine = document.getElementById("nine");
const comma = document.querySelector(".btn--comma");
let numbers = document.querySelectorAll(".number");
console.log(numbers);

// let operator = "";
// let operators = document.querySelectorAll(".action");
// console.log(operators);
// for (let i = 0; i < operators.length; i++) {
//   operators[i].addEventListener("click", function (e) {
//     operator = e.target.textContent;
//     console.log(operator);
//   });
// }

let variableOne = 0;
let variableTwo = 0;
let getVariableTwo = false;
let op = "";
let isEqualPressed = false;
let opArr = ["+", "-", "*", "/", "="];

const calculate = function (e) {
  if (isEqualPressed) {
    variableOne = "";
    variableTwo = "";
    boolean = false;
    op = "";
    isEqualPressed = false;
  }
  if (!getVariableTwo && !opArr.includes(e.target.textContent)) {
    variableOne += e.target.textContent;
    input.textContent = variableOne;
  } else if (opArr.includes(e.target.textContent)) {
    op = e.target.textContent;
    getVariableTwo = true;
  } else if (getVariableTwo && !opArr.includes(e.target.textContent)) {
    variableTwo += e.target.textContent;
    input.textContent = variableTwo;
  }
  console.log(variableOne, op, variableTwo);
  document.querySelector(".btn--check").addEventListener("click", function () {
    if (op == "+") {
      isEqualPressed = true;
      input.textContent = Number(variableOne) + Number(variableTwo);
    } else if (op == "-") {
      isEqualPressed = true;
      input.textContent = Number(variableOne) - Number(variableTwo);
    } else if (op == "*") {
      isEqualPressed = true;
      input.textContent = Number(variableOne) * Number(variableTwo);
    } else {
      isEqualPressed = true;
      input.textContent = Number(variableOne) / Number(variableTwo);
    }
  });
};
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i].addEventListener("click", calculate);
// }
document.body.addEventListener("click", calculate);
// let variables = [];

// reset.addEventListener("click", function () {
//   result.textContent = 0;
//   variables = [];
// });

// if (result.textContent == 0) {
//   result.textContent = this.textContent;
// } else {
//   result.textContent += this.textContent;
// }
// e.target.textContent;

// const storeVar = function (e) {
//   let result = 0;
//   console.log(e.target.textContent);
//   variables.push(Number(result.textContent));
//   variables.push(this.textContent);
//   // result.textContent = 0;
// };

// add.addEventListener("click", calculate);
// substract.addEventListener("click", calculate);
// multiply.addEventListener("click", calculate);
// divide.addEventListener("click", calculate);
// percentage.addEventListener("click", calculate);
// elevate.addEventListener("click", calculate);
// modulation.addEventListener("click", calculate);

// check.addEventListener("click", function () {
//   variables.push(Number(result.textContent));
//   let store = 0;
//   let currentResult = 0;
//   for (let i = 0; i < variables.length; i++) {
//     let sign = variables[i];
//     let find = i + 1;
//     if (typeof sign == "number" && store === 0) {
//       store = variables[i];
//     }
//     if (typeof sign !== "number") {
//       switch (sign) {
//         case "+":
//           currentResult = calculate.add(store, variables[find]);
//           store = currentResult;
//           result.textContent = store;
//           break;
//         case "-":
//           currentResult = calculate.substract(store, variables[find]);
//           store = currentResult;
//           result.textContent = store;
//           break;
//         case "*":
//           currentResult = calculate.multiply(store, variables[find]);
//           store = currentResult;
//           result.textContent = store;
//           break;
//         case "/":
//           currentResult = calculate.divide(store, variables[find]);
//           store = currentResult;
//           result.textContent = store;
//           break;
//         case "%":
//           currentResult = calculate.percentage(store, variables[find]);
//           store = currentResult;
//           result.textContent = store;
//           break;
//         case "elev":
//           currentResult = calculate.elevate(store, variables[find]);
//           store = currentResult;
//           result.textContent = store;
//           break;
//         case "mod":
//           currentResult = calculate.modulation(store, variables[find]);
//           store = currentResult;
//           result.textContent = store;
//           break;
//       }
//     }
//   }
//   console.log(variables);
//   variables = [];
// });

// pi.addEventListener("click", function () {
//   result.textContent = calculate.pi;
// });

// e.addEventListener("click", function () {
//   result.textContent = calculate.e;
// });

// x.addEventListener("click", function () {
//   result.textContent = result.textContent * result.textContent;
// });

// sqrt.addEventListener("click", function () {
//   result.textContent = calculate.sqrt(result.textContent);
// });
