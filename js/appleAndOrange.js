let apple_count = 0;
let orange_count = 0;

apples.forEach((ap) => {
  const app = a + ap;
  if (app >= s && app <= t) {
    apple_count++;
  }
});

oranges.forEach((or) => {
  const orr = b + or;
  if (orr >= s && orr <= t) {
    orange_count++;
  }
});

console.log(apple_count);
console.log(orange_count);
