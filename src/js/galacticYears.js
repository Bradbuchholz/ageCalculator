export default class galacticYears {
  constructor(age, lifeExpectancy){
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.mercAge = Math.floor(this.age/.24);
    this.venAge = Math.floor(this.age/.62);
    this.marsAge = Math.floor(this.age/1.88);
  }
};