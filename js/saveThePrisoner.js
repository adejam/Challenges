let last = 0;
let t = m;
while (t-- > 0) {
  last = ((m - 1 + (s - 1)) % n) + 1;
  return last;
}
