// object and array spread -> 이전 요소에 새로운 요소 더하기(병합)
const friends = ["kamja","king"];
const newFriends = [...friends, "dal"];
console.log(newFriends);

const kamja = {
  username : "kamja",
}
console.log({...kamja, potato : "like"});

const week = ["Mon","Tue","Wed"];
const weekend = ["Sat","Sun"];
console.log("fullweek",[...week,"Thu","Fri",...weekend]);

// // Obejct에 속성(property)를 조건부로 추가하는 방법1
// const lastName = prompt("Last name");
// const user = {
//   username : "kamja",
//   age : 20,
//   lastName : lastName !== "" ? lastName : undefined,
// };
// console.log(user);

// Obejct에 속성(property)를 조건부로 추가하는 방법2
const lastName = prompt("Last name");
const user = {
  username : "kamja",
  age : 20,
  ...(lastName !== "" && {lastName}),
};
console.log(user);