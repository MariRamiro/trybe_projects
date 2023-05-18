const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const { employees } = data;
  let personData = {};
  employees.forEach((employee) => {
    if (employeeName === employee.firstName || employeeName === employee.lastName) {
      personData = employee;
    }
  });
  return personData;
};

module.exports = getEmployeeByName;
