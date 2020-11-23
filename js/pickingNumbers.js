function pickingNumbers(a) {
  var mySet = new Set();
  var maxCount = 0;
  for (var i = 0; i < a.length; i++) {
    var count = 0;
    if (!mySet.has(a[i])) {
      mySet.add(a[i]);
      for (var j = 0; j < a.length; j++) {
        if (a[j] == a[i] || a[j] == a[i] + 1) {
          count++;
        }
      }
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const result = pickingNumbers(a);

  ws.write(result + "\n");

  ws.end();
}
