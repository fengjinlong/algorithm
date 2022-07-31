// 简单工厂
abstract class Cpffeee {
  constructor(name: string) {
    console.log("name", name);
  }
}
class A extends Cpffeee {
  constructor(name: string) {
    super(name);
  }
}
class B extends Cpffeee {
  constructor(name: string) {
    super(name);
  }
}
class C extends Cpffeee {
  constructor(name: string) {
    super(name);
  }
}
class CafeFactory {
  static order(name: string): any {
    switch (name) {
      case "A":
        return new A("a");
      case "B":
        return new B("b");
      case "C":
        return new C("c");
    }
  }
}
console.log("a", CafeFactory.order("A"));
console.log("b", CafeFactory.order("B"));
console.log(CafeFactory.order("C"));
