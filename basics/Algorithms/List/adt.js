function List() {
  this.listSize = 0;
  this.pos = 0;

  this.dataStore = []; //initializes an empty array to store list elements

  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains; // if exists in the List

  function append(element) {
    this.dataStore[this.listSize++] = element;
  }
  function find(element) {
    for(var i=0; i < this.dataStore.length; ++i){
      if (this.dataStore[i] === element) {
        return i;
      }
      return -1;
    }
  }
  function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  function length() {
    return this.listSize;
  }

  function toString() {
    return this.dataStore;
  }

  function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1 , 0 , element);
      ++this.listSize;
      return true;
    }
    return false;
  }

  function clear() {
    // delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
    // return true;
  }

  function contains(element) {
    for (var i=0; i<this.dataStore.length;++i){
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }

  function front() {
    this.pos = 0;
  }

  function end() {
    this.pos = this.listSize - 1;
  }

  function prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }

  function next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }

  function currPos() {
    return this.pos;
  }

  function moveTo(position) {
    this.pos = position;
  }

  function getElement() {
    return this.dataStore[this.pos];
  }

}


// test
var l = new List();
l.append('elemento1');

console.log(l.listSize);
console.log(l.find('elemento2'));
console.log(l.remove('elemento2'));
console.log(l.remove('elemento1'));
console.log(l.length());

l.append('fabian');
l.append('jesus');
l.append('napa');

console.log(l.insert('Isaac', 'fabian'));

console.log(l.clear());
console.log(l.toString());
console.log(l.contains('fabian'));
console.log(l.contains('ashley'));

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front()
console.log(names.getElement());

names.next();
console.log(names.getElement());
//
names.next();
names.next();
names.prev();
console.log(names.getElement());

names.front();
console.log(names.currPos());

// iterator List
for(names.front(); names.currPos() < names.length() - 1; names.next()) {
  console.log(names.getElement());
}
