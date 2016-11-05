function parent() {
  var message = 'Hello';

  function child() {
    console.log(message);
  }
  child();
}

parent();
