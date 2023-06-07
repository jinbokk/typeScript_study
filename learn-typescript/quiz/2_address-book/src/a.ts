// function fetchItems() {
//   let items = ["a", "b", "c"];
//   return items;
// }

// fetchItems();

function fetchItems() {
  let items = ["a", "b", "c"];
  return new Promise(resolve => resolve(items));
}

fetchItems();
