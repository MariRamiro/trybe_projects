const data = require('../data/zoo_data');

const { employees } = data;
let collaborators = [];

const isManager = (id) => employees.filter((employee) => {
  employee.managers === id});

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.forEach((employee) => employee.managers === managerId).map
      collaborators = [`${employee.firstName} ${employee.lastName}`];


      //     }
//   });
//   return collaborators;
// };

module.exports = { isManager, getRelatedEmployees };
