function deepCopyObj(obj) {
  const copyObj = {};
  for (const key in obj) {
    if (typeof obj[key] == "object") {
      copyObj[key] = deepCopyObj(obj[key]);
    } else {
      copyObj[key] = obj[key];
    }
  }
  return copyObj;
}

const obj1 = {
  a: {
    b: {
      d: 1,
    },
    c: 1,
  },
  aa: {
    bb: {
      dd: {
        ff: 1,
      },
      gg: 5,
    },
  },
};

const obj2 = {
  a: {
    b: 1,
  },
};
deepCopyObj(obj2);
