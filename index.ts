type NameObj = {
  name?: string;
  age: number;
}

const obj: NameObj = {
  name: "abc",
  age: 27
}

delete obj.name
// delete obj.age

console.log(obj.name)