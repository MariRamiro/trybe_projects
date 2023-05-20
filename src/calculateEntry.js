const data = require('../data/zoo_data');

const { prices } = data;
const list = {
  child: 0,
  adult: 0,
  senior: 0,
};

const countEntrants = (entrants) => {
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      list.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      list.adult += 1;
    } else {
      list.senior += 1;
    }
  });
  return list;
};

const calculateEntry = (entrants) => {
  const countAge = countEntrants(entrants);

  if (!entrants || entrants.length === 0) {
    return 0;
  }

  return ((countAge.child * prices.child) + (countAge.adult * prices.adult) + 
  (countAge.senior * prices.senior));
};

module.exports = { calculateEntry, countEntrants };
