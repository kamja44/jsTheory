// rest -> 모든 값을 하나의 변수로 축소(contract)시킨다. 
// infiniteArgs 함수의 parameter들을 kimchi로 축소
const infiniteArgs = (...kimchi) => console.log(kimchi);
infiniteArgs("1",2,true,"lalala",[1,2,3,4]);

const bestFriendMaker = (first, ...rest) => {
  console.log(`My best friend is ${first}`);
  console.log(`${rest}`);
  console.log(rest);
}
bestFriendMaker("kamja","potato","kokuma");

// spread -> 확장(전개)
// rest -> 축소 -> array로 반환