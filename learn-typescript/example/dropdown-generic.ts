interface DropdownItems<T> {
  value: T;
  selected: boolean;
}

const emails: DropdownItems<string>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

const numberOfProducts: DropdownItems<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem(item: DropdownItems<string> | DropdownItems<number>) {
//   const option = document.createElement("option");
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// function createDropdownItem(item: DropdownItems<string | number>) {
//   const option = document.createElement("option");
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

function createDropdownItem<T>(item: DropdownItems<T>) {
  const option = document.createElement("option");

  if()
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
});

// 인터페이스에 제네릭을 선언하는 방법

// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = {
//   value: 'abc',
//   selected: false,
// };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = {
  value: "abc",
  selected: false,
};
