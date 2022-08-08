const user = {
  name : "kamja",
  age : 20,
  pwd : 44444,
};
// user object에서 pwd를 제외
const killPassword = ({pwd, ...rest}) => rest;
const cleanUser = killPassword(user);
console.log(cleanUser);
// {country = "Korea", ...rest} <-...rest === rest
//  ({country, ...rest}); <-...rest === spread
const setCountry = ({country = "Korea", ...rest}) => ({country, ...rest});
console.log(setCountry(user));

// rename object
const rename = ({name:Name, ...rest}) => ({Name, ...rest}) // name -> Name으로 변수명 변경
console.log(rename(user));