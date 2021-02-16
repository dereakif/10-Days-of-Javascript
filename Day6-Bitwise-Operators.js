function getMaxLessThanK(n, k) {
  let max = 0;
  let bitwise;
  for (let a = 1; a <= n; a++) {
    for (let b = a + 1; b <= n; b++) {
      bitwise = a & b;
      if (bitwise < k && bitwise > max) {
        max = bitwise;
      }
    }
  }

  return max;
}
