// to tranform a file to array
const textToArray = require('./text-to-array');

// import the List class to create a new List of Movies
const List = require('../list-adt');

// creating a array of movies from the file 'films.txt'
const movies = textToArray('films.txt');

// creating a List of movies or films
const movieList = new List();

// adding array itemst to the List Items
for(let i = 0; i < movies.length; i++) {
  movieList.append(movies[i]);
}

// function to Display the list itemst
function displayList(list) {
  for(list.front(); list.currPos() < list.length(); list.next()) {
    // if the element is an object
    if (list.getElement() instanceof Customer) {
      console.log(list.getElement['name']);
      console.log(list.getElement['movie']);
    } else {
      console.log(list.getElement());
    }
  }
}

// creating a customer list
const customers = new List();

function Customer(name, movie) {
  this.name = name;
  this.movie = movie;
}

// function that allow to customer to checkout a movie
function checkOut(name, movie, movieList, CustomerList) {
  if (movieList.contains(movie)) {
    var c = new Customer(name, movie);
    CustomerList.append(c);
    movieList.remove(movie);
  } else {
    console.log(movie + ' is not available.');
  }
}

displayList(movieList);
checkOut('Ryan Ray', 'The Godfather', movieList, customers);
console.log(customers.toString());
displayList(movieList);
