// create a grades Object that stores
// a set of student grades in an object
// Provide a function for adding a grade and
// function for displaying the student's grade average

class Student {
  constructor(name = '', lastname = '') {
    this.name = name;
    this.lastname = lastname;
    this.grades = [];
  }

  addAGrade(grade) {
    this.grades.push(grade);
  }

  averageGrades() {
    let total = 0;
    for(let i = 0; i < this.grades.length; i++) {
      total += this.grades[i];
    }
    return total / this.grades.length;
  }
}

const aaronSwarts = new Student('aaron', 'Swartz');
aaronSwarts.addAGrade(10);
aaronSwarts.addAGrade(9);
aaronSwarts.addAGrade(8);
console.log(aaronSwarts.averageGrades()); // 9
