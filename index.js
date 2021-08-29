const sourceObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

const groupInfo = {
  aGroup: ["a", "b"],
  bGroup: ["c", "b", "e"],
};

function makeGroup(source, info) {
  const merge = (a, b) => ({ ...a, ...b });

  const a = Object.keys(info);
  return a
    .map((group) => {
      console.log({ [group]: info[group] });
      return {
        [group]: info[group].map((k) => ({ [k]: source[k] })).reduce(merge, {}),
      };
    })
    .reduce(merge, {});
}

console.log(makeGroup(sourceObj, groupInfo));
