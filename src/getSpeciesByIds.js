const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const { species } = data;
  const idsArray = [...ids];
  const newIdArray = [];
  if (!ids) {
    return [];
  }
  idsArray.forEach((id) => {
    newIdArray.push(species.filter((specie) => specie.id === id));
  });
  return newIdArray.flat();
};

module.exports = getSpeciesByIds;
