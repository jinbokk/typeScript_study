class Person {
  // TS에서는 멤버변수의 타입을 미리 설정해두어야 한다.
  name: string;
  age: number;

  constructor(name: string, age: number) {
    //constructor의 타입을 설정해야 한다.
    this.name = name;
    this.age = age;
  }
}
