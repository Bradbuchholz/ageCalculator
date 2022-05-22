export default class galacticYears {
  constructor(age, lifeExpectancy){
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.mercAge = Math.floor(this.age/.24);
    this.venAge = Math.floor(this.age/.62);
    this.marsAge = Math.floor(this.age/1.88);
    this.jupAge = Math.floor(this.age/11.86);
    this.mercYearsLeftOrOver = Math.floor(Math.abs(this.lifeExpectancy - age)/.24);
    this.venYearsLeftOrOver = Math.floor(Math.abs(this.lifeExpectancy - age)/.62);
    this.marsYearsLeftOrOver = Math.floor(Math.abs(this.lifeExpectancy - age)/1.88);
    this.jupYearsLeftOrOver = Math.floor(Math.abs(this.lifeExpectancy - age)/11.86);
    
  }
};