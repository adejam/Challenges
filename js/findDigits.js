let digit = 0;
   const temp = n;
//$count = count($n); not yet solved

while (temp != 0) {
  let d = temp % 10;
  temp /= 10;
  if (d > 0 && temp % d == 0) {
    digit++;
  }
}
return digit;
