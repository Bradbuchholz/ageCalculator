import galacticYears from './../src/js/galacticYears.js';

describe('galacticYears', () => {
  let years;
  beforeEach(() => {
    years = new galacticYears(37);
});

// test 1
  test('should correctly return a new age object with the age property', () => {
    expect(years.age).toEqual(37);
  });
});

// test 2
test('should correctly return age in Mercury years', () => {
  expect(years.calc('Mercury')).toEqual(154.16)
})