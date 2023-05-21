const data = require('../data/zoo_data');

const { species } = data;
const { hours } = species;

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === species.name) {
    return species.availability;
  } if (!scheduleTarget) {
    const schedule = {
      Day : {
        officeHour: 
        exhibition: [],

    }
    return 
  }


};

module.exports = getSchedule;
