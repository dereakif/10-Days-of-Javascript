/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let x = s.split("");
  let vowels = [];
  let consonants = [];
  let result = [];
  for (let i = 0; i < x.length; i++) {
    switch (x[i]) {
      case "a":
        vowels.push(x[i]);
        break;
      case "e":
        vowels.push(x[i]);
        break;
      case "i":
        vowels.push(x[i]);
        break;
      case "o":
        vowels.push(x[i]);
        break;
      default:
        consonants.push(x[i]);
    }
  }
  result = [...vowels, ...consonants];
  result.forEach((e) => console.log(e));
}
