// 제네릭 함수
function identity<T>(arg: T): T {
  return arg;
}

// 사용 예시
const result1 = identity<string>('Hello');
const result2 = identity<number>(42);
console.log(result1); // 출력: Hello
console.log(result2); // 출력: 42

// 타입 가드 함수
function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

// 사용 예시
function processValue(value: unknown) {
  if (isNumber(value)) {
    // value가 숫자일 때의 로직
    console.log('Value is a number:', value);
    console.log(value + 10);
  } else {
    // value가 숫자가 아닐 때의 로직
    console.log('Value is not a number:', value);
  }
}

// 호출 예시
processValue(42); // 숫자일 때의 로직 실행
processValue('Hello'); // 숫자가 아닐 때의 로직 실행