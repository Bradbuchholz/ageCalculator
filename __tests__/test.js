import galacticYears from './../src/js/galacticYears.js';

describe('galacticYears', () => {
  let age;
  beforeEach(() => {
    age = new galacticYears(37);
});

// test 1
  test('should correctly return a new age object with the age property', () => {
    expect(age.age).toEqual(37);
  });
});

