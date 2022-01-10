"use strict";

const output = document.querySelector(".output");
const button = document.querySelector(".btn");

const calculate = {
  pi: 3.141592653589793,
  e: 2.718281828459045,
  ratio: function (x, y, width) {
    return (width / x) * y;
  },
  percentage: function (x, y) {
    return `${(x * 100) / y}% `;
  },
  elevate: function (x, y) {
    return Math.pow(x, y);
  },
  sqrt: function (x) {
    return Math.sqrt(x);
  },
  modulation: function (x, y) {
    if (y == 0) {
      return `Divisor shouldn't be 0`;
    } else {
      return x % y;
    }
  },
};

let firstVariable = 0;
let secondVariable = 0;
let operator = 0;
let useFirstResult = true;
let opArr = ["+", "-", "*", "/", "=", "elev", "%", "sqrt", "mod"];

function calculateEvent(e) {
  if (e.target.classList.contains("btn")) {
    if (e.target.textContent == "del") {
      output.textContent = 0;
      firstVariable = 0;
      secondVariable = 0;
      operator = 0;
      useFirstResult = true;
    } else if (useFirstResult && !opArr.includes(e.target.textContent)) {
      if (e.target.classList.contains("shortcut")) {
        switch (e.target.textContent) {
          case "PI":
            firstVariable = calculate.pi;
            output.textContent = firstVariable;
            break;

          case "e":
            firstVariable = calculate.e;
            output.textContent = firstVariable;
            break;

          case "x²":
            firstVariable = firstVariable * firstVariable;
            output.textContent = firstVariable;
        }
      } else {
        if (output.textContent == 0 || operator == "=") {
          output.textContent = e.target.textContent;
          firstVariable = e.target.textContent;
        } else {
          output.textContent += e.target.textContent;
          firstVariable += e.target.textContent;
        }
      }

      console.log("firstVar:", firstVariable);
    } else if (!useFirstResult && !opArr.includes(e.target.textContent)) {
      if (e.target.classList.contains("shortcut")) {
        switch (e.target.textContent) {
          case "PI":
            secondVariable = calculate.pi;
            output.textContent = firstVariable;
            break;

          case "e":
            secondVariable = calculate.e;
            output.textContent = firstVariable;
            break;
        }
      } else if (secondVariable == 0) {
        output.textContent = e.target.textContent;
        secondVariable = e.target.textContent;
      } else {
        output.textContent += e.target.textContent;
        secondVariable += e.target.textContent;
      }
      console.log("secondVar:", secondVariable);
    } else if (opArr.includes(e.target.textContent)) {
      if (operator == 0) {
        useFirstResult = false;
        operator = e.target.textContent;
        console.log("operator:", operator);
      } else {
        firstVariable = Number(firstVariable);
        secondVariable = Number(secondVariable);
        switch (operator) {
          case "+":
            firstVariable = firstVariable + secondVariable;

            break;
          case "-":
            firstVariable = firstVariable - secondVariable;

            break;
          case "*":
            firstVariable = firstVariable * secondVariable;

            break;
          case "/":
            firstVariable = firstVariable / secondVariable;

            break;
          case "%":
            firstVariable = calculate.percentage(firstVariable, secondVariable);

            break;
          case "elev":
            firstVariable = calculate.elevate(firstVariable, secondVariable);
            break;
          case "sqrt":
            firstVariable = calculate.sqrt(firstVariable);
            break;
          case "mod":
            firstVariable = calculate.modulation(firstVariable, secondVariable);
            break;
        }
        operator = e.target.textContent;
        if (operator == "=") {
          useFirstResult = true;
        } else {
          useFirstResult = false;
        }
        output.textContent = firstVariable;
        secondVariable = 0;
        console.log("operator:", operator);
        console.log("useFirstResult:", useFirstResult);
        console.log("firstVar:", firstVariable);
      }
    }
  } else {
  }
}

document.body.addEventListener("click", calculateEvent);
