const sumOfBill = bill.reduce((a, b) => a + b, 0);
const hh = sumOfBill - bill[k];
const h = hh / 2;
const r = b - h;

if (h === b) {
  console.log("Bon Appetit");
} else if (b > h) {
  console.log(r);
}
