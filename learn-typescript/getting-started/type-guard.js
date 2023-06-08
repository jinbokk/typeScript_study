function introduce() {
    return { name: "Tony", age: 33, skill: "Iron Making" };
}
let tony = introduce();
// ! : 유니온 타입이기 때문에 Dev와 Person의 공통 속성인 name만 사용 가능하다.
// console.log(tony.skill);
// ? : 아래처럼 범위를 좁혀 사용이 가능하다.
// ? : 그러나 가독성이 좋지 않고 복잡해지므로 타입가드를 사용한다.
if (tony.skill) {
    let skill = tony.skill;
    console.log(skill);
}
else if (tony.age) {
    let age = tony.age;
    console.log(age);
}
// ? : 아래가 타입가드 정의 방식이다.
// ? : 보통 isXXX 식으로 작성을 많이 한다.
function isDeveloper(target) {
    return target.skill !== undefined;
}
if (isDeveloper(tony)) {
    tony.skill;
}
else {
    tony.age;
}
