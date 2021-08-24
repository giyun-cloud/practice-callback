const wei = [];
const chok = [];
const oh = ["손견", "손책", "손권"];

wei.push("조조", "하후돈", "하후연");
chok.push("유비", "관우", "장비");
// oh.push("손견", "손책", "손권");
console.log(chok);

wei.unshift("서황");
chok.unshift("조운");
// oh.unshift("주유");

console.log(wei.slice(1, 3));
oh.splice(1, 1, "주유", "감녕");
console.log(oh);

wei.shift();

console.log(chok.join("  "));
console.log(chok.join("  ").split("  "));

console.log(chok.concat(oh));
console.log([...oh, ...chok]);
