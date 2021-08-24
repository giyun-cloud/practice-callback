function sumNumbers() {
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}

console.log(sumNumbers(10, 20, 30, 40));

function sumNumbersArgs(...args) {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sumNumbersArgs(10, 20, 30, 40));
