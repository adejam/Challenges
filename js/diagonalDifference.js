let n = arr.length;
let firstDiag = 0;
let secondDiag = 0;

let i = 0;
for (let j = 0; j < n; j++) {
  i++;
  firstDiag += arr[j][j];
  secondDiag += arr[n - i][j];
}
let ans = Math.abs(firstDiag - secondDiag);
return ans;
