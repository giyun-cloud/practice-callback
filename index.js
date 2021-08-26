Array.prototype.myMap = function (cb) {
  const ary = [];

  for (let i = 0; i < this.length; i++) {
    ary.push(cb(this[i], i, this));
  }

  return ary;
};
console.log([1, 2, 3].myMap((num) => num * num));
console.log([1, 2, 3].map((num) => num * num));
