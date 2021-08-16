function common() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  console.log(3);
}
// common();

function callback() {
  console.log(1);
  function call(cd) {
    setTimeout(function () {
      console.log(2);
      cd();
    }, 1000);
  }
  function back() {
    console.log(3);
  }
  call(back);
}

callback();
