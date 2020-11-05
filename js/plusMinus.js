const n = arr.length;
let pos = 0;
let neg = 0;
let zer = 0;

arr.forEach((ar) => {
  if (ar < 0) {
    neg++;
  } else if (ar > 0) {
    pos++;
  } else {
    zer++;
  }
});
const posi = (pos / n).toFixed(6);
const negi = (neg / n).toFixed(6);
const zero = (zer / n).toFixed(6);
console.log(posi);
console.log(negi);
console.log(zero);
