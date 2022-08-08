const friends = [1,2,3,4];
console.log(friends);

// spread -> 변수를 가져와서 풀어해친다(unpack) 즉, 전개한다.
// spread 사용법 -> ...배열명 or ...오브젝트명
console.log(...friends); // -> friends배열의 1,2,3,4 값을 전개
// 즉, 배열을 출력하는게 아닌 배열의 요소들을 출력

const family = ["a","b","c"];
// 배열을 합칠때 speread가 유용하다.
// friends 배열과 family 배열 합치기
console.log([...friends, ...family]); // friends와 family의 요소들을 가지고있는 배열 반환

// object spread
const sexy = {
  name : "kamja",
  age : 20,
};

const hello = {
  sexy : false,
  hello : "hello",
}

// sexy object와 hello object를 하나의 object로 반환
console.log({...sexy, ...hello});