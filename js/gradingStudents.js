for (let i = 0; i < grades.length; i++) {
  const r = 5 * Math.ceil(grades[i] / 5);
  if (grades[i] >= 38) {
    if (r - grades[i] < 3) {
      grades[i] = r;
    }
  }
}
return grades;
