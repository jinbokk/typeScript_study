interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Rectangle | Circle;

function calculateArea(shape: Shape): number {
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  } else if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  }

  // 만약 Shape 타입에 다른 종류의 도형이 추가된다면 여기에 처리하는 코드를 추가할 수 있습니다.

  throw new Error("Unknown shape!");
}

const rectangle: Rectangle = {
  kind: "rectangle",
  width: 5,
  height: 10,
};

const circle: Circle = {
  kind: "circle",
  radius: 3,
};

const rectangleArea: number = calculateArea(rectangle);
console.log(rectangleArea);  // 출력 결과: 50

const circleArea: number = calculateArea(circle);
console.log(circleArea);  // 출력 결과: 약 28.27