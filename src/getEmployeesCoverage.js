const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const getEmployee = (colaborators) => employees.find((employee) =>
  employee.firstName === colaborators.name
  || employee.lastName === colaborators.name
  || employee.id === colaborators.id);

const getAnimals = (animalsArray) => species.filter((animal) =>
  animalsArray.some((idanim) => animal.id === idanim));

const generateArrData = (arrayOfAnimals) => {
  const arrayOfSpecies = [];
  const arrayOfLocation = [];
  arrayOfAnimals.forEach((animal) => {
    arrayOfSpecies.push(animal.name);
    arrayOfLocation.push(animal.location);
  });
  return [arrayOfSpecies, arrayOfLocation];
};

const generateObject = (colaborators, animalsFunction, dataFunction) => {
  const { id, firstName, lastName, responsibleFor } = colaborators;
  const arr = animalsFunction(responsibleFor);
  const [arrayOfSpecies, arrayOfLocation] = dataFunction(arr);

  return {
    id,
    fullName: firstName.concat(' ', lastName),
    species: arrayOfSpecies,
    locations: arrayOfLocation,
  };
};
const getEmployeesCoverage = (param) => {
  if (!param) {
    return employees.map((employee) => generateObject(employee, getAnimals, generateArrData));
  }
  if (param.name || param.id) {
    const employee = getEmployee(param);
    if (!employee) {
      throw new Error('Informações inválidas');
    }
    return generateObject(employee, getAnimals, generateArrData);
  }
};

module.exports = getEmployeesCoverage;
