const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => {
  const list = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((visitor) => {
    if (visitor.age < 18) {
      list.child += 1;
    } else if (visitor.age >= 18 && visitor.age < 50) {
      list.adult += 1;
    } else {
      list.senior += 1;
    }
  });
  return list;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const visitors = countEntrants(entrants);
  let count = 0;
  Object.entries(visitors).forEach((chave) => {
    const [type, number] = chave;
    count += number * prices[type];
  });
  return count;
};

module.exports = { calculateEntry, countEntrants };
