"use strict";

const calculate = {
  pi: 3.141592653589793,
  e: 2.718281828459045,
  ratio: function (x, y, width) {
    return (width / x) * y;
  },
  percentage: function (x, y) {
    return `${(x * 100) / y}% `;
  },
  add: function (x, y) {
    return x + y;
  },
  substract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    if (y == 0) {
      return `Divisor shouldn't be 0`;
    } else {
      return x / y;
    }
  },
  modulation: function (x, y) {
    if (y == 0) {
      return `Divisor shouldn't be 0`;
    } else {
      return x % y;
    }
  },
  elevate: function (x, y) {
    return Math.pow(x, y);
  },
  sqrt: function (x) {
    return Math.sqrt(x);
  },
};

console.log(calculate.add(calculate.pi, 5));
console.log(calculate.ratio(13, 5, 200));

///////////////////

let result = document.querySelector(".result");
const reset = document.querySelector(".btn--del");
const check = document.querySelector(".btn--check");

const add = document.getElementById("add");
const substract = document.getElementById("substract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const pi = document.querySelector(".btn--pi");
const e = document.querySelector(".btn--e");
const percentage = document.querySelector(".btn--percentage");
const x = document.querySelector(".btn--x");
const sqrt = document.querySelector(".btn--sqrt");
const elevate = document.querySelector(".btn--elevate");
const ratio = document.querySelector(".btn--ratio");
const modulation = document.querySelector(".btn--modulation");

let variables = [];

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eigth = document.getElementById("eigth");
const nine = document.getElementById("nine");
const comma = document.querySelector(".btn--comma");

const storeNumber = function () {
  if (result.textContent == 0) {
    result.textContent = this.textContent;
  } else {
    result.textContent += this.textContent;
  }
};

const storeVar = function () {
  variables.push(Number(result.textContent));
  variables.push(this.textContent);
  result.textContent = 0;
};
reset.addEventListener("click", function () {
  result.textContent = 0;
  variables = [];
});

zero.addEventListener("click", storeNumber);
one.addEventListener("click", storeNumber);
two.addEventListener("click", storeNumber);
three.addEventListener("click", storeNumber);
four.addEventListener("click", storeNumber);
five.addEventListener("click", storeNumber);
six.addEventListener("click", storeNumber);
seven.addEventListener("click", storeNumber);
eigth.addEventListener("click", storeNumber);
nine.addEventListener("click", storeNumber);
comma.addEventListener("click", storeNumber);

add.addEventListener("click", storeVar);
substract.addEventListener("click", storeVar);
multiply.addEventListener("click", storeVar);
divide.addEventListener("click", storeVar);
percentage.addEventListener("click", storeVar);
elevate.addEventListener("click", storeVar);
modulation.addEventListener("click", storeVar);

check.addEventListener("click", function () {
  variables.push(Number(result.textContent));
  let store = 0;
  let currentResult = 0;
  for (let i = 0; i < variables.length; i++) {
    let sign = variables[i];
    let find = i + 1;
    if (typeof sign == "number" && store === 0) {
      store = variables[i];
    }
    if (typeof sign !== "number") {
      switch (sign) {
        case "+":
          currentResult = calculate.add(store, variables[find]);
          store = currentResult;
          result.textContent = store;
          break;
        case "-":
          currentResult = calculate.substract(store, variables[find]);
          store = currentResult;
          result.textContent = store;
          break;
        case "*":
          currentResult = calculate.multiply(store, variables[find]);
          store = currentResult;
          result.textContent = store;
          break;
        case "/":
          currentResult = calculate.divide(store, variables[find]);
          store = currentResult;
          result.textContent = store;
          break;
        case "%":
          currentResult = calculate.percentage(store, variables[find]);
          store = currentResult;
          result.textContent = store;
          break;
        case "elev":
          currentResult = calculate.elevate(store, variables[find]);
          store = currentResult;
          result.textContent = store;
          break;
        case "mod":
          currentResult = calculate.modulation(store, variables[find]);
          store = currentResult;
          result.textContent = store;
          break;
      }
    }
  }
  console.log(variables);
  variables = [];
});

pi.addEventListener("click", function () {
  result.textContent = calculate.pi;
});

e.addEventListener("click", function () {
  result.textContent = calculate.e;
});

x.addEventListener("click", function () {
  result.textContent = result.textContent * result.textContent;
});

sqrt.addEventListener("click", function () {
  result.textContent = calculate.sqrt(result.textContent);
});
