// this module help to read a list of text file to returns a arrays
const fs = require('fs');

function createArray(file) {

  let data = fs.readFileSync(`${__dirname}/${file}`);

  arr = data.toString().split("\n");
  // to trim white spaces
  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
    if (arr[i] === "") {
      arr.splice(i, 1);
    }
  }
  return arr;

};

module.exports = createArray;
