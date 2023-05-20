const data = require('../data/zoo_data');

const { employees } = data;
const isManager = (id) => employees.some((employee) => employee.managers === id);

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  employees.forEach((employee) => { 
    return employee.managers === managerId;
    const lala = [`${employee.firstName} ${employee.lastName}`];
  });



module.exports = { isManager, getRelatedEmployees };
