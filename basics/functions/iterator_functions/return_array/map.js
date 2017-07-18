// la diferencia entre map y forEach, esque map retorna ub arreglo
function curve(grade) {
  return grade += 5;
}

var grades = [77, 65, 81, 92, 83];
var newGrades = grades.map(curve);

console.log(newGrades);

function first(word) {
  return word[0];
}

var words = ["for","your","information"];
var acronym = words.map(first);

console.log(acronym);
console.log(acronym.join(""));
