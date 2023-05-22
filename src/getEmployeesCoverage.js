const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const getEmployeesCoverage = () => {

  const getAnimal = (arr) => species.find((specie) => specie.id === arr.id);
  const getEmployee = (obj) => employees.find((employee) => obj.name === employee.firstName || obj.name === employee.lastName || obj.id === employee.id);


};
}
module.exports = getEmployeesCoverage;
