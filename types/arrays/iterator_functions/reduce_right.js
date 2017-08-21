// only working from the righthand side of the array to the left, instead of from
// left to right.

function concat(accumulatedString, item) {
  return accumulatedString + item;
}
var words = ["the ", "quick ","brown ", "fox "];

var sentence = words.reduceRight(concat);

print(sentence); // displays "fox brown quick the"
