// program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
// number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

for(let i = 1; i <= 100; i++){
  if (i % 3 === 0)
  {
    console.log('fizz');
  }
  else if(i % 5 === 0)
  {
    console.log('buzz');
  }
  else {
    console.log(i);
  }
}

// When you have that working, modify your program to print "FizzBuzz"
// for numbers that are divisible by both 3 and 5.

console.log('-------------------------------');

for(let i = 1; i <= 100; i++){
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log('fizz buss');
  }
  else {
    console.log(i);
  }
}
