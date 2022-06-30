function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  }
  if (operator === "-") {
    return num1 - num2;
  }
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num1 / num2;
  if ((operator = "undefined")) {
    return "sorry, this won't work";
  }
}

module.exports = {
  calculate,
};
