// List Abstract Data Type

// we have to provide definition of the list, it menas properties and operations

// List is an order secuence of data, when each item is called element. The limit of elements is determined by memory

// listSize (property) Number of elements in list
// pos (property) Current position in list
// length (property) Returns the number of elements in list
// clear (function) Clears all elements from list
// toString (function) Returns string representation of list
// getElement (function) Returns element at current position
// insert (function) Inserts new element after existing element
// append (function) Adds new element to end of list
// remove (function) Removes element from list
// front (function) Sets current position to first element of list
// end (function) Sets current position to last element of list
// prev (function) Moves current position back one element
// next (function) Moves current position forward one element
// currPos (function) Returns the current position in list
// moveTo (function) Moves the current position to specified position

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
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
  this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
  for(let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
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
  var inserPos = this.find(after);
  if (inserPos > -1) {
    this.dataStore.splice(inserPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.post = 0;
}

function contains(element) {
  for(let i = 0; i < this.dataStore.length; i++){
    if (this.dataStore[i] == element) {
      return true
    }
  }
  return false;
}

function front() {
  this.pos = 0;
}

function end() {
  console.log(this.listSize);
  this.pos = this.listSize - 1;
}

function prev() {
  if (this.pos >= 0) {
    --this.pos;
  }
}

function next() {
  if (this.pos < this.listSize) {
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


module.exports = List;
