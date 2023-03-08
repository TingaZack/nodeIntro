class SuperHero {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  setName(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
  }
}

// module.exports = new SuperHero('Batman', '45 Year old');
module.exports = SuperHero;
