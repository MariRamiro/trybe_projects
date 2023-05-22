const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  if (!animal) {
    const allAnimals = species.map((specie) => [specie.name, specie.residents.length]).sort();
    return Object.fromEntries(allAnimals);
  }
  if (animal) {
    const countSpecies = species.find((specie) => specie.name === animal.species);
    if (animal.sex) {
      const countSex = species.residents.filter((resident) => (resident.sex === animal.sex));
      return countSex.length;
    }
    return countSpecies.residents.length;
  }
};

module.exports = countAnimals;
