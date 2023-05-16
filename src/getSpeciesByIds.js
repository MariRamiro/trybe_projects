const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const { id } = data.species;
  if ( !id ){
    return [];
  }
  return ids.map((identity) => id.find((value) => { value === identity}));
};

module.exports = getSpeciesByIds;
