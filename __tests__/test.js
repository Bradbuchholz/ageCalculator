import galacticYears from './../src/js/galacticYears.js';

describe('galacticYears', () => {
  let years;
  beforeEach(() => {
    years = new galacticYears(37);
});

// test 1 user Earth age
  test('should correctly return a new age object with the age property', () => {
    expect(years.age).toEqual(37);
  });


// test 2 user Mercury years
  test('should correctly return a new age on Mercury', () => {
    expect(years.adjusted).toEqual(59.67);
  });  
});