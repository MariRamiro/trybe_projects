const data = require('../data/zoo_data');

const { species } = data;
const allAnimals = {};

const countAnimals = (animal) => {
  if (!animal) {
    species.forEach((specie) => {
      allAnimals[specie.name] = specie.residents.length;
      return allAnimals;
    });
  } if (animal === species.name) {
    return species.find((specie) => specie.residents.length);
  } if (animal === species.name && species.residents.sex) {
    return species.find((specie) => specie.residents.sex.length);
  }
};

module.exports = countAnimals;
