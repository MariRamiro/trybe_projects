const data = require('../data/zoo_data');

const isManager = (id) => {
 const { managers } = data.employees;
 const mangersArray = [];
 return managers.filter((manager) => {manager === id;
    return mangersArray.push(id)});
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)){
    throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const { employees } = data;
  const responsibilitys = [];
    return employees.forEach( id => { id === managerId;
      responsibilitys.push(id.responsibleFor);
      return responsibilitys;
    });
};

module.exports = { isManager, getRelatedEmployees };
