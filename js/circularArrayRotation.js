let c = [];
let d = [];
for (let i = 0; i < a.length; i++) {
  c[(i + k) % a.length] = a[i];
}

for (let i = 0; i < queries.length; i++) {
  d[i] = c[queries[i]];
}

return d;