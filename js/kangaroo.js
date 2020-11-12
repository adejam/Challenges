let result = "NO";
for (let i = 0; i < 10000; i++) {
  if (result === "NO") {
    if (x1 + v1 * i === x2 + v2 * i) {
      result = "YES";
    }
  }
}
return result;
