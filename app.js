const settings = {
  notifications: {
    follow: true,
    alerts: true,
    unfollow: false,
  },
  color: {
    theme: "dark",
  },
};

// if (settings.notifications.follow) {
//   // send email
// }

// destructuring
const {
  notifications: { follow },
  color,
} = settings;

// line 17 to 20은 line 23,24과 같다.
// const follow = settings.notifications.follow;
// const color = settings.color;

console.log(follow);
console.log(color);
// destructuring -> 큰 오브젝트에서 특정 변수나 그 안에 속한 작은 오브젝트에 접근할 수 있도록 해준다.

const settings2 = {
  color: {
    theme: "dark",
  },
};

const { notifications: { alerts = false } = {} } = settings2;
console.log(alerts);
// settings2의 notifications 안의 alerts의 값이 없다면 false를 default value로 설정
// settings2의 notifications가 존재하지 않는다면 빈 object가 된다.
// 즉, settings2 = target object
