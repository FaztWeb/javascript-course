const fs = require('fs');

function createArr(file) {
  var data = fs.readFileSync(file, 'utf-8');
  var arr = data.split('\n');
  var arrTrim = [];
  for(var i=0; i < arr.length - 1; ++i){
    arrTrim[i] = arr[i].trim();
  }
  return arrTrim;
}

var movies = createArr('./films.txt');
console.log(movies);

// List
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

function Customer(name, movie) {
  this.name = name;
  this.movie = movie;
}

// movieList
var movieList = new List();
for( var i = 0; i < movies.length; ++i){
  movieList.append(movies[i]);
}

// CustomerList
var customers = new Customer();

function displayList(list) {
  for(list.front(); list.currPos() < list.length(); list.next()){
    if (list.getElement() instanceof Customer) {
      console.log(list.getElement()['name'] + ' ,'+ list.getElement()['movie']);
    }
    else{
      console.log(list.getElement());
    }
  }
}
