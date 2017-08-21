// function weekTemps() {
//   this.dataStore = [];
//   this.add = add;
//   this.average = average;
// }
//
// function add(temp) {
//   this.dataStore.push(temp);
// }
// function average() {
//   var total = 0;
//   for(var i=0;i<this.dataStore.length;i++){
//     total += this.dataStore[i];
//   }
//   return total / this.dataStore.length;
// }


class weekTemps {
  constructor() {
    this.dataStore = [];
  }
  add(temp){
    this.dataStore.push(temp)
  }
  average() {
    var total = 0;
    for(var i=0;i<this.dataStore.length;i++){
      total += this.dataStore[i];
    }
    return total / this.dataStore.length;
  }
}

var myWeek = new weekTemps();
myWeek.add(52);
myWeek.add(52);
myWeek.add(52);

console.log(myWeek.average());


// studets grades
class StudentsGrades {
  constructor(grades) {
    this.grades = grades;
  }
  add(newGrade){
    this.grades.push(newGrade);
  }
  average(){
    let total = 0;
    for(var i =0; i<this.grades.length;++i){
      total += this.grades[i];
    }
    return total / this.grades.length;
  }
}

var myStudent = new StudentsGrades([10,10,10]);

console.log(myStudent.average());


class Words {
  constructor(words) {
    this.words = words;
  }
  singleWord(){
    return this.words.join('');
  }
}


var palabra = new Words(['h','o','l','a']);
console.log(palabra.singleWord());
