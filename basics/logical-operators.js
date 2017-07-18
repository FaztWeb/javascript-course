// AND &&
var goToSchool;
var hadShower = true;
var hasBackpack = false;

goToSchool = hadShower && hasBackpack; // false

// OR ||
var hasApple = true;
var hasOrange = false;

goToSchool = hasOrange || hasApple;

// not !
var isWeekend = true;
var needToShowerToday = !isWeekend;

// combining logial Operators
var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;

var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);

/*
  Comparing values
*/
//greater than
var height = 65;
var heightRestriction = 60;
height > heightRestriction; // true

height >= heightRestriction; // true

// less than
height < heightRestriction; // true
height <= heightRestriction;

// equal to
var mySecretNumber = 5;
var guess = 3;
var guess2 = 5;
mySecretNumber === guess;//false

mySecretNumber === guess2;//true

// double equals - convertion
var stringNumber = "5";
var actualNumber = 5;
stringNumber === actualNumber;//false

0 == false; //true
"false" == false; // false
