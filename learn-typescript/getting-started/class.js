// class Person {
//   // 클래스 로직
//   constructor() {
//     console.log("생성 되었습니다");
//   }
// }

// new Person();

class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성 되었습니다");
    this.name = name;
    this.age = age;
  }
}

const jinbok = new Person("진복", 30);
console.log(jinbok);

const test = { name: "테스트", age: 100 };
const admin = {};
admin.prototype = test;
console.log(admin);
admin.role = "admin";
console.log(admin);
