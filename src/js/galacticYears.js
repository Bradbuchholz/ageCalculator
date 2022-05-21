export default class galacticYears {
  constructor(age) {
    this.age = age;
  }

  cacl(planet) {
    let ageMercury;
    let ageVenus;
    let ageMars;
    let ageJupiter;
    switch(planet) {
      case "Mercury":
        ageMercury = parseFloat((this.age/.24).toFixed(2));
        return ageMercury;
    }
  }
}