// 工厂方法模式
abstract class Coffee {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    console.log("name: ", this.name);
  }
}
class Bitter extends Coffee {}
class Sweet extends Coffee {}

abstract class CreateCoffeeFactory {
  abstract create(): Coffee;
}

class CreateBitterCoffeeFactory extends CreateCoffeeFactory {
  create(): Coffee {
    return new Bitter("bitter");
  }
}
class CreateSweetCoffeeFactory extends CreateCoffeeFactory {
  create(): Coffee {
    return new Sweet("sweet");
  }
}
let s = new CreateSweetCoffeeFactory();
console.log("s", s);

const ss = s.create();
console.log("ss", ss);
ss.getName();
