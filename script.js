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
