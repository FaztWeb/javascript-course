class SingleWord {
  constructor() {
    this.words = [];
  }

  addLetter(letter){
    this.words.push(letter);
  }

  show(){
    return this.words.join('');
  }
}

var hola = new SingleWord();

hola.addLetter('h');
hola.addLetter('o');
hola.addLetter('l');
hola.addLetter('a');

hola.show();
