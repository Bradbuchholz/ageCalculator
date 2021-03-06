import galacticYears from './../src/js/galacticYears.js';

describe('galacticYears', () => {
  let years;
  beforeEach(() => {
    years = new galacticYears(37, 83);
  });
test('should correctly return a new age object with the age property and life expectancy', () => {
    expect(years.age).toEqual(37);
    expect(years.lifeExpectancy).toEqual(83);
  }); 
test('should correctly return user age in Mercury years', () => {
  expect(years.mercAge).toEqual(154);
  }); 
test('should correctly return user age in Venus years', () => {
  expect(years.venAge).toEqual(59);
  });
test('should correctly return user age in Mars years', () => {
  expect(years.marsAge).toEqual(19);
  });
test('should correctly return user age in Jupiter years', () => {
  expect(years.jupAge).toEqual(3);
  });
test('should correctly return expected years left to live on each planet', () => {
  expect(years.mercYearsLeftOrOver).toEqual(191);
  expect(years.venYearsLeftOrOver).toEqual(74);
  expect(years.marsYearsLeftOrOver).toEqual(24);
  expect(years.jupYearsLeftOrOver).toEqual(3);
  });
test('should correctly return years lived over expected on each planet', () => {
  years = new galacticYears(105, 83)
  expect(years.mercYearsLeftOrOver).toEqual(91);
  expect(years.venYearsLeftOrOver).toEqual(35);
  expect(years.marsYearsLeftOrOver).toEqual(11);
  expect(years.jupYearsLeftOrOver).toEqual(1);
  });
});