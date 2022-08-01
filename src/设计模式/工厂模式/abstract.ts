// 抽象工厂方法
abstract class Watch {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  showTime() {
    console.log("it is watch and type is ", this.type);
    return 'haha'
  }
}
abstract class Phone {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  call() {
    console.log("it is phone and type is ", this.type);
    return 'heihei'
  }
}
class AndroidWatch extends Watch {}
class AndroidPhone extends Phone {}
class IosWatch extends Watch {}
class IosPhone extends Phone {}

abstract class Factory {
  abstract createWatch(): Watch;
  abstract createPhone(): Phone;
}
class AndroidFactory extends Factory {
  createWatch() {
    return new AndroidWatch("android");
  }
  createPhone() {
    return new AndroidPhone("android");
  }
}
class IosFactory extends Factory {
  createWatch(): Watch {
    return new IosWatch("ios");
  }
  createPhone(): Phone {
    return new IosPhone("ios");
  }
}
const af = new AndroidFactory()
console.log('af', af.createWatch().showTime());

const iof = new IosFactory()
console.log('iof', iof.createPhone().call());

