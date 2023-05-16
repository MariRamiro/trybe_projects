const data = require('../data/zoo_data');

const getAnimalsOlderThan = (name, age) => {
  const {name, resident: age} = data.species;
  return data.species.every((animal) => animal.age >= minimumAge );
};

module.exports = getAnimalsOlderThan;
