/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  let rec = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };
  return rec;
}
