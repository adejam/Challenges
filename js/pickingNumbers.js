function pickingNumbers(a) {
  let newSet = new Set();
  let maximumCount = 0;
  for (let i = 0; i < a.length; i++) {
    let count = 0;
    if (!newSet.has(a[i])) {
      newSet.add(a[i]);
      for (let j = 0; j < a.length; j++) {
        if (a[j] == a[i] || a[j] == a[i] + 1) {
          count++;
        }
      }
      maximumCount = Math.max(maximumCount, count);
    }
  }
  return maximumCount;
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
