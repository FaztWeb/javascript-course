function makeAdjetifier(adjetive) {
  return function (string) {
    return adjetive + ' ' + string;
  };
}

var coolifier = makeAdjetifier('cool');
coolifier('conference');
