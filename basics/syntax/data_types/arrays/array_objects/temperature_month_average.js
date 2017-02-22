// Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
// data using a two-dimensional array. Create functions to display the monthly aver‐
// age, a specific week’s average, and all the weeks’ averages.

class MonthAverage {
  constructor() {
    this.weekData = [];
  }

  addWeekTemps(weekTemps){
    this.weekData.push(weekTemps);
  }

  show(){
    return this.weekData;
  }

  weekAverage(numberWeek){
    var data = this.weekData[numberWeek];
    var total = 0;

    for(var i = 0; i < data.length; i++){
      total += data[i];
    }

    return total/data.length;
  }

  allWeekAverage(){
    var totalDays = 0;
    var numberDays = 0;
    for(let i = 0; i < this.weekData.length; i++){
      for(let j = 0; j < this.weekData[i].length; j++){
        totalDays += this.weekData[i][j];
        numberDays ++;
      }
    }
    return totalDays/numberDays;
  }

  monthlyAverage(){
    var total = 0;
    var lengthOfWeeks = this.weekData.length;

    for(var i = 0; i < lengthOfWeeks ; i++){
      total += this.weekAverage(i);
    }

    return total/lengthOfWeeks;
  }

}

var month = new MonthAverage();
month.addWeekTemps([10,10,10,10,10,10,10]);
month.addWeekTemps([10,10,10,10,10,10,10]);
month.addWeekTemps([10,10,10,10,10,10,10]);
month.addWeekTemps([10,10,10,10,10,10,10]);

console.log(month.show());
console.log(month.weekAverage(1));
console.log(month.allWeekAverage());
console.log(month.monthlyAverage());
