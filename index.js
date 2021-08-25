const a1 = {
  aa: "aa",
};
const a2 = {
  bb: "bb",
};
const a3 = {
  cc: "cc",
};

a1.__proto__ = a2;
a2.__proto__ = a3;

// console.log(a1.toString);
// console.log(a1.cc);

function Name(_name) {
  this.name = _name;
}

Name.prototype.lastName = "Gyn";

const gy = new Name("giyun");

console.log(gy.name, gy.lastName);
