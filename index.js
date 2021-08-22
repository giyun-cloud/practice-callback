function saleRate(rate) {
  return function price(price) {
    return price - price * rate * 0.01;
  };
}

const summerRate = saleRate(20);
const winterRate = saleRate(25);

console.log(summerRate(10000), winterRate(10000));
