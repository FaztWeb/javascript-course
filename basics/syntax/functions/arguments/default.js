// es5
function eat(person, food) {
  person = person || 'someone';
  food = food || 'food';
  return person + ' eat ' + food;  
}
eat();

// es6
function sum(num1 = 0, num2 = 0) {
  return num1 + num2;
}

sum();//0
