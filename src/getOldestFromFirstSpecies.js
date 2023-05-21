const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const { employees } = data;
  const firstZooId = employees.find((employee) => id === employee.id);
  const [firstResident] = firstZooId.responsibleFor;
  const { residents } = data.species.find(({ id: specieId }) => firstResident === specieId);
  const oldestAge = residents.reduce((acc, cur) => {
    if (acc.age > cur.age) {
      return acc;
    }
    return cur;
  });

  return Object.values(oldestAge);
};

module.exports = getOldestFromFirstSpecies;
