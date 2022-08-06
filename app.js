const wrapper = document.querySelector(".wrapper");

const friends = ["me", "lynn", "dal", "mark"];

const list = `
  <h1>People I love</h1>
  <ul>
    ${friends.map((friend) => `<li>${friend}</li>`).join("")}
  </ul>
`;
// map은 무엇을 return 하던지 그 값을 array로 반환

wrapper.innerHTML = list;
console.log(friends.join("❤"));
// friends.join -> 배열의 문자열들 합치기
