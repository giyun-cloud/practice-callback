(function () {
  return console.log(10);
})();

function args(...args) {
  args.map((arg) => console.log(arg));
}

function* gen() {
  yield console.log("1번째 지점");
  yield console.log("2번째 지점");
  yield console.log("3번째 지점");
  return console.log("4번째 지점 리턴");
}
