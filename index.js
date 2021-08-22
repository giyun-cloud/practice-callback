const obj = Object.create(null, {
  name: {
    value: "Gyn",
    writable: false,
    configurable: false,
  },
});

obj.name = "a";
delete obj.name;
console.log(obj.name); // ojb.name은 a로바뀌지 않고 Gyn이라고뜸
