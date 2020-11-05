let result = 0;
const d = drives.length;
const k = keyboards.length;
let maxi = -1;
for (let i = 0; i < k; i++) {
  let canBuy = 0;
  for (let j = 0; j < d; j++) {
    canBuy = keyboards[i] + drives[j];
    if (canBuy <= b && canBuy > maxi) {
      maxi = canBuy;
    }
  }
}

return maxi;
