/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let count = 0;
  objects.forEach((e) => {
    if (e.x == e.y) {
      count += 1;
    }
  });
  return count;
}
