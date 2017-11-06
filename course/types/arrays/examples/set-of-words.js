// Store a set of words in an array and display the contents both forward and backward.
class myWords {
  constructor(listOfWords = []) {
    this.setOfWords = listOfWords;
  }

  print() {
    return this.setOfWords;
  }

  printReverse() {
    return this.setOfWords.map(word => {
      return word.split("").reverse().join("");
    });
  }
}

const words = new myWords(['hello', 'world']);
console.log(words.print()); // [ 'hello', 'world' ]
console.log(words.printReverse()); // [ 'olleh', 'dlrow' ]
