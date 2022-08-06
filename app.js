const friends = [
  "nico@gmail.com",
  "lynn@naver.com",
  "dal@yahoo.com",
  "mark@hanmail.com",
  "flynn@korea.com,",
];

// @korea.com 메일 찾기
// @korea.com을 찾은 후 가장 첫번째 요소를 반환
let target = friends.find((friend) => friend.includes("@korea.com"));
console.log(target);

// @korea.com의 index 반환
const target2 = friends.findIndex((friend) => friend.includes("@korea.com"));
console.log(target2);
const username = friends[target2].split("@")[0];
const email = friends[target2].split("@")[1];
console.log(`${username}@${email}`);

// korea.com을 찾지 못했다면 -1반환
const check = () =>
  friends.findIndex((friend) => friend.includes("@korea.com"));
target = check();

if (target !== -1) {
  console.log(target);
  const username = friends[target].split("@")[0];
  const email = "google.com";
  friends[target] = `${username}@${email}`;
  console.log(friends);
  // array.fill -> array의 요소를 원하는 값으로 채운다.
  friends.fill("*".repeat(5), 1, 3);

  target = check();
}
console.log(target);
console.log(friends);
