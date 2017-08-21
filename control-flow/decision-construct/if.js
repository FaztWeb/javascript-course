/*
  if
  if - else
  if - else if
*/

// if estatement
var high = 50;
var mid = 25;
var low = 1;

var current = 13;

var found = -1;

if (current < mid) {
  mid = (current - low) / 2;
}

console.log(current);

// if - else statement

if (current < mid) {
  mid = (current - low) / 2;
} else {
  mid = (current + high) / 2;
}

// if - else if
if (current < mid) {
  mid = (current - mid) / 2;
} else if (current > mid) {
  mid = (current + high) / 2;
} else {
  found = current;
}
