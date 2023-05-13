enum Shoes {
  Nike,
  Adidas,
  Crocs = 10,
  K2 = "케이투",
}

// 숫자형 이넘
const myShoes_1 = Shoes.Nike;
const myShoes_2 = Shoes.Adidas;
const myShoes_3 = Shoes.Crocs;

console.log("test_1:", myShoes_1); // 0
console.log("test_2:", myShoes_2); // 1
console.log("test_3:", myShoes_3); // 10

// 문자형 이넘
const myShoes_4 = Shoes.K2;
console.log("test_4:", myShoes_4); // 케이투

// 예제
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답 입니다");
  }
  if (answer === Answer.No) {
    console.log("오답 입니다");
  }
}

// askQuestion("yes");
askQuestion(Answer.Yes);
// askQuestion("Y");

// askQuestion("no");
askQuestion(Answer.No);
// askQuestion("N");
