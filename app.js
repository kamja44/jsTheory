const friends = ["kamja","potato","kokuma"];

// 배열의 각 요소들에 대한 반복 동작 1.
// for
// for(let i=0; i<friends.length; i++){
//   console.log(friends[i]);
// }

// 배열의 각 요소들에 대한 반복 동작 2.
// forEach
// forEach는 current item, current index, current array를 반환한다. forEach는 array에서만 가능하다.
const addHeart = (item, index, array) => console.log(item, index, array);
friends.forEach(addHeart);
friends.forEach(friend => console.log("forEach",friend));

// 배열의 각 요소들에 대한 반복 동작 3.
// for of
for(const friend of friends){
  console.log("for of",friend);
}
// for of는 iterable(루프)가 가능한 모든 곳(Array, Iterables, NodeList, Strigns 등)에 동작 가능
// 즉, 이러한 것도 가능
for(const kamja of "kamja"){
  console.log("kamja", kamja);
}
// for of는 중간에 loop를 멈추는게 가능
// potato를 찾으면 loop 멈추기
for(const friend of friends){
  if(friend === "potato"){
    break;
  }else{
    console.log("for of with conditional", friend);
  }
}