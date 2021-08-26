function closure() {
  let number = 1;
  return function () {
    return number++;
  };
}

const clo = closure();

console.log(clo());
console.log(clo());
console.log(clo());
