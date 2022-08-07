const follow = checkFollow();
const alert = checkAlert();

// shorthand property
// const settings = {
//   notifications : {
//     follow : follow,
//     alert : alert
//   }
// }
// line 4 to 10과 같은 결과
// key값과 변수명이 같을 때 사용 가능
const settigns = {
  notifications: {
    follow,
    alert,
  },
};
