const highest = Math.max(...ar);
let i = 0;
candles.forEach((candle) => {
  if (candle == highest) {
    i++;
  }
});
return i;
