const str = "hello";

const strTs: string = "hello";
const num: number = 10;
const arr: Array<string> = ["1", "2"];
const arrNum: Array<number> = [1, 2];
const easyArrNum: number[] = [1, 2];

// 튜플형 : 각 인덱스의 타입과 순서까지 정의하는 것
const address: [string, number] = ["a", 1];

// 객체형
const obj: object = {
  a: "a",
  b: "b",
};

const person: { name: string; age: number } = {
  name: "jinbok",
  age: 30,
};

// 진위값
const show: boolean = true;

// 함수
// 함수 파라미터에
const sum1 = (a: number, b: number) => {
  return a + b;
};

// 함수 반환값에
const sum2_a = (a: number, b: number): number => a + b;
const sum2_b = (a: number, b: number): number => {
  return a + b;
};
function sum2_c(): number {
  return 10;
}

sum2_a(10, 20, 30, 40); // 인자개수 에러
sum2_b(10, 20, 30, 40); // 인자개수 에러

// 옵셔널 파라미터
function log_1(a: string, b: number) {}
log_1("hello world"); // 인자 2개인데 1개만 있다는 에러
log_1("hello world", 2);

function log_2(a: string, b?: number) {}
log_2("hello world"); // 인자 2개이지만, b는 옵셔널이라서 있어도 되고 없어도 된다.
log_2("hello world", 2);
