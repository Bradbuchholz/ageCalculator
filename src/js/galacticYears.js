export default class galacticYears {
  constructor(age, lifeExpectancy){
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.mercAge = Math.floor(this.age/.24);
  }
};