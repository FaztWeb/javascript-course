/*encapsulation*/

// object represent the typical expression of 'encapsulation'
// that is the ability to concentrate both data(properties) and
//and functions (methods), hidden internal details
// this feature, is called '

// If we need to get a sorted list of employees
// We do not need to know how this method works

var company = {
  name: 'ACME INC.',
  employees: [],
  sortEmployeesByName: function () {}
};


// however when internal details implmentation depends on publicly accesible properties
// we risk to to frustate the effort of hidden internal behaviour
company.employees = 'this is a joke!';
company.sortEmployeesByName();

// a general approach to prevent relevant properties direct access is to replace with methods
function Company(name) {
  this.name = name;
  var employees = [];

  this.getEmployees = function () {
    return employees;
  }

  this.addEmployee = function (employee) {
    employees.push(employee);
  }

  this.sortEmployeesByName = function () {
    // algorithm to sort
  };
}

var company = new Company('ACME INC.');
