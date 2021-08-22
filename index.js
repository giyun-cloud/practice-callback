function addOne() {
  let result = 0;
  return function add(add = 0) {
    if (add) result += add;
    else result++;
    console.log(result);
    return result;
  };
}

for (let i = 0; i < 5; i++) {
  addOne()();
}

const result = addOne();

for (let i = 0; i < 5; i++) {
  result();
}

result(5);
result();
console.log("🟢🟢🟢🟢🟢🟢🟢🟢");
function* generatorAddOne() {
  let i = 1;
  while (true) {
    console.log(i);
    const add = yield i;
    if (add) i += add;
    else i++;
  }
}

const genResult = generatorAddOne();
for (let i = 0; i < 5; i++) {
  genResult.next();
}
genResult.next(5);
genResult.next();
