let count = 0;
ar.sort((a, b) => a - b);
for (let i = 0; i < n; i++) {
  if (ar[i] == ar[i + 1]) {
    count++;
    i += 1;
  }
}
return count;
