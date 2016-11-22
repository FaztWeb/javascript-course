'use strict';

const sentence = [
  {subject: 'Javascripts', verb: 'is', object: 'great'},
  {subject: 'elephants', verb: 'are', object: 'large'}
];

function say({subject, verb, object}) {
  console.log(`${subject} ${verb} ${object}`);
}

for(let s of sentence){
  say(s);
}
