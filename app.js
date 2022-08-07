const settings = {
  color: {
    chosen_color: "dark",
  },
};

// const {
//   color: { chosen_color = "light" },
// } = settings;

// console.log(chosen_color);

// rename
// const chosenColor = settings.color.chosen_color || "light";

// rename wiht destructuring
// const {
//   color: { chosen_color: chosenColor = "light" },
// } = settings;
// console.log(chosenColor);

let chosenColor = "blue";
console.log(chosenColor);
({
  color: { chosen_color: chosenColor = "light" },
} = settings);

console.log(chosenColor);
// 새 변수(chosenColor)를 생성하는 대신에 chosenColor를 업데이트하는 방식
