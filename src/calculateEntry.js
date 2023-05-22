const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  const list = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
  return list;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const countAge = countEntrants(entrants);

  return ((countAge.child * prices.child) + (countAge.adult * prices.adult)
  + (countAge.senior * prices.senior));
};

module.exports = { calculateEntry, countEntrants };
