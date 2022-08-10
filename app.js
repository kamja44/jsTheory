// set <- only Value
// map <- key with Value
const map = new Map();
map.set("age", 20);
console.log(map);
// map.entries() <- get iterator
console.log(map.entries());
console.log(map.has("age"));
console.log(map.get("age"));
// overwrite 가능
map.set("age","4444");
console.log(map.get("age"));