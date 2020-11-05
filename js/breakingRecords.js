let max = scores[0];
let min = scores[0];
let max_count = 0;
let min_count = 0;
scores.forEach((score) => {
  if (score > max) {
    max = score;
    max_count++;
  }
  if (score < min) {
    min = score;
    min_count++;
  }
});
return [max_count, min_count];
