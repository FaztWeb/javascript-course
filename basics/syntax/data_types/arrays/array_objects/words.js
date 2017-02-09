 // Store a set of words in an array and display the contents both forward and backward
class setWords {
  constructor() {
    this.words = [];
  }

  add(word){
    this.words.push(word);
  }

  forward(){
    return this.words;
  }

  backward(){

    return this.words.reverse();
  }
}

var newWords = new setWords();

newWords.add('hello');
newWords.add('how');
newWords.add('are');
newWords.add('you');

newWords.forward();
newWords.backward();
