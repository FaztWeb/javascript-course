class StudentGrades {
  constructor() {
    this.grades = [];
  }

  add(grade) {
    this.grades.push(grade);
  }

  average() {
    let total = 0;
    for(let i = 0; i < this.grades.length; ++i){
      total += this.grades[i];
    }
    return total / this.grades.length;
  }
}

var studentOne = new StudentGrades();

studentOne.add(10);
studentOne.add(7);
studentOne.add(8);
studentOne.add(10);
studentOne.add(7);

studentOne.average();
