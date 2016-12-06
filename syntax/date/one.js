const now = new Date();

// note that months are zero-based: 1, not 01
const newYear = new Date(2017, 1, 1);
const christmas = new Date(2016, 12, 25);

// create a date with specific date and time
const halloweenParty = new Date(2016, 9, 31, 19, 0); //19, 0 = 7:00 pm

console.log(now);
console.log(christmas);
console.log(newYear);
console.log('halloweenParty: ',halloweenParty);

// components
console.log('Year: ',halloweenParty.getYear());
console.log('Month: ',halloweenParty.getMonth());
console.log('Day: ',halloweenParty.getDate());
console.log('NumberDay: ',halloweenParty.getDay());//1,2
console.log('Hours: ',halloweenParty.getHours());//1,2
console.log('Minutes: ',halloweenParty.getMinutes());//1,2
console.log('Seconds: ',halloweenParty.getSeconds());//1,2
console.log('Milliseconds: ',halloweenParty.getMilliseconds());//1,2
