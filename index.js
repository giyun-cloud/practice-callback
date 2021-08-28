const obj = [
  { a: 1, b: "B", c: "CCC" },
  { a: 2, b: "B", c: "CCC" },
  { a: 3, b: "B", c: "CCC" },
];

const cart = [];

for (const item of obj) {
  const row = [];

  for (const [, value] of Object.entries(item)) {
    row.push(value);
  }

  cart.push(row);
}

console.log(cart);
console.log(cart.join("==="));

const result = obj.map((obj) => {
  console.log("첫번째 map넘어온 obj", obj);
  const obj2 = Object.entries(obj);
  console.log("entries한 obj", obj2);
  return obj2.map(([, value]) => String(value));
});
console.log(result);
console.log(result.join("==="));
