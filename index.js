let myFirstPromise = new Promise((resolve, reject) => {
  const random = Math.random();
  console.log(random);
  setTimeout(function () {
    if (random >= 0.5) {
      resolve("Success!");
    } else {
      reject("Fail");
    }
  }, 1000);
});

myFirstPromise
  .then((successMessage) => {
    console.log("Yay! " + successMessage);
  })
  .catch((failMessage) => {
    console.log("Oops! " + failMessage);
  });
