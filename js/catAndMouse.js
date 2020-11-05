let b = "";
const catA = Math.abs(z - x);
const catB = Math.abs(z - y);
if (catA > catB) {
  b = "Cat B";
} else if (catA < catB) {
  b = "Cat A";
} else if (catA == catB) {
  b = "Mouse C";
}

return b;
