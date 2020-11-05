let d = path.split("");
let n = steps;
const min = 2;
const max = 1000000;
const c = d.length;
let sealevel = 0;
let pathTaken = 0;
let val = 0;
let mou = 0;

if (c == n && n >= min && n <= max) {
  for (let i = 0; i < n; i++) {
    if (d[i] == "D") {
      pathTaken -= 1;
      if (pathTaken < sealevel) {
        if (val < 1) {
          val = 1;
        } else if (val > 0 && pathTaken > -2) {
          val += 1;
        }
      } else if (pathTaken == sealevel) {
        val = val;
      } else if (pathTaken > sealevel) {
        val = val;
      }
    } else if (d[i] == "U") {
      pathTaken += 1;
      if (pathTaken > sealevel) {
        if (mou < 1) {
          mou = 1;
        } else if (mou > 0 && pathTaken < 2) {
          mou += 1;
        }
      } else if (pathTaken == sealevel) {
        mou = mou;
      } else if (pathTaken < sealevel) {
        mou = mou;
      }
    }
  }
  return val;
}
