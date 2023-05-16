const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  let {data} = data.employees;
  return data.map((name) => employeeName === firstName || employeeName === lastName? data : [] )
};
// rever
module.exports = getEmployeeByName;
