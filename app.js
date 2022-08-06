// const friends = ["nico","lynn","dal"]

// line1과 같은 결과
const friends = Array.of("nico", "lynn", "dal");

console.log(friends);

// line 10, line 11 -> array-like object
// array 같지만 array는 아닌 것
// const buttons = document.querySelectorAll("button");
const buttons = document.getElementsByClassName("btn");
console.log(buttons);

// array가 아닌 이유 -> button은 foreach method가 없다.
// buttons.foreach((button) => {
//   button.addEventListener("click", () => console.log(`I ve been click`));
// });

// Array.from -> creates an array from an array-like object
// Array.from(array-like object)가 array를 반환
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => console.log("Hello"));
});

// const ar = Array.from(buttons);

// ar.forEach((button) => {
//   button.addEventListener("click", () => console.log(`hi`));
// });
