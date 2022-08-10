// Symbol("key") <- key를 Unique로 만든다.
const hello = Symbol("description");
const bye = Symbol("description");

const superBig = {
  [Symbol("kamja")] : {
  // kamja : {
    kind : "potato"
  },
  [Symbol("kamja")] : {
    // kamja : {
      kind : "potato"
  },
  hello : "bye",
}
// console.log(superBig["kamja"].kind);
// superBig["kamja"].kind = "kokumi";
// console.log(superBig["kamja"].kind);
// Symbol로 key를 Unique로 만들면 값의 수정이 불가능하다.
console.log(superBig);
// Symbol로 key를 Unique로 만들면 같은 값도 서로 다르다.
console.log(Object.keys(superBig));
console.log(Object.getOwnPropertySymbols(superBig));

const symbol = Object.getOwnPropertySymbols(superBig);
symbol.forEach(symbol => console.log(superBig[symbol]));