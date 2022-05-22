import galacticYears from './../src/js/galacticYears.js';

describe('galacticYears', () => {
  let years;
  beforeEach(() => {
    years = new galacticYears(37, 83);
  });
test('should correctly return a new age object with the age property and life expectancy', () => {
    expect(years.age).toEqual(37);
    expect(years.lifeExpectancy.toEqual(83));
  });  
});