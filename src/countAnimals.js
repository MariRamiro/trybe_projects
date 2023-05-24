const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  if (animal) {
    const { species: specie, sex } = animal;
    if (!sex) {
      return species.find((anim) => anim.name === specie).residents.length;
    }
    return species.find((anim) => anim.name === specie)
      .residents.filter((anim) => anim.sex === sex).length;
  }
  const animalObj = {};
  species.forEach((anim) => {
    animalObj[anim.name] = anim.residents.length;
  });
  return animalObj;
};

module.exports = countAnimals;
