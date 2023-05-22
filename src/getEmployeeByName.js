const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  const worker = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return worker;
};

module.exports = getEmployeeByName;
