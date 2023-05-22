const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Para o argumento "Monday" e "09:00-AM" retorna a string "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Para o argumento "Tuesday" e "09:00-AM" retorna a string "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Para o argumento "Wednesday" e "09:00-AM" retorna a string "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Para o argumento "Segunda" e "09:00-AM" retorna a string "The day must be valid. Example: Monday"', () => {
    expect(() => { getOpeningHours('Segunda', '09:00-AM'); }).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('Para o argumento "Friday" e "09:00-ZM" lança um erro com a mensagem "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Para o argumento "Saturday" e "C9:00-AM" lança um erro com a mensagem "The hour should represent a number"', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow(new Error('The hour should represent a number'));
  });
  it('Para o argumento "Sunday" e "09:c0-AM" lança um erro com a mensagem "The minutes should represent a number"', () => {
    expect(() => { getOpeningHours('Sunday', '09:c0-AM'); }).toThrow(new Error('The minutes should represent a number'));
  });
  it('Para o argumento "Sunday" e "13:00-PM" lança um erro com a mensagem "The hour must be between 0 and 12"', () => {
    expect(() => { getOpeningHours('Sunday', '13:00-AM'); }).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('Para o argumento "Tuesday" e "12:60-PM" lança um erro com a mensagem "The minutes must be between 0 and 59"', () => {
    expect(() => { getOpeningHours('Tuesday', '12:60-PM'); }).toThrow(new Error('The minutes must be between 0 and 59'));
  });
  it('Para um argumento vazio retorna um objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
});
