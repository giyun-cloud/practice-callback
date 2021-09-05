function div(strings, ...fns) {
  const flat = (s) => s.split("\n").join("");

  console.log(flat(strings[0]));
  console.log(strings[0]);
  console.log(flat(strings[1]));
  console.log(strings[2]);
  console.log(fns);

  return function (props) {
    return `<div style ="${
      flat(strings[0]) + (fns[0] && fns[0](props) + flat(strings[1]))
    }"</div>`;
  };
}

const Div = div`
  font-size: 20px;
  color: ${(props) => (props.active ? "white" : "gray")};
  border: name;
  color: ${(props) => (props.active ? "white" : "gray")};
  border: name;
`;

console.log(Div({ active: true }));
