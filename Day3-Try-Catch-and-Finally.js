/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (err) {
    console.log("s.split is not a function");
  }
  console.log(s);
}
