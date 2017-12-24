// instancing a List
let names = new List();
names.append('Clayton');
names.append('Raymond');
names.append('Cynthia');
names.append('Jennifer');
names.append('Bryan');
names.append('Danny');
console.log(names.toString());

names.front();
console.log(names.getElement()); // Clayton

names.next();
console.log(names.getElement()); // Raymond

names.next();
names.next();
names.prev();
console.log(names.getElement()); // Cynthia

// Iterating though a list
for(names.front(); names.currPos() < names.length(); names.next()) {
  console.log('name: ', names.getElement());
}

// travers a list backward
for(names.end(); names.currPos() >= 0; names.prev()) {
  console.log('name: ', names.getElement());
}
