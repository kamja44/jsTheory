const emails = [
  "kamja@naver.com",
  "naver@google.com",
  "sweetpotato@gmail.com",
  "potato@hanmail.net",
];

// Array.prototype.find() item == argumnet 즉, item이 email이여도 상관 X
const foundMail = emails.find(item => item.includes("@gmail.com"));
// const foundMail = email.find(
//   function(item) {
//     return item.includes("@gmail.com");
//   });
console.log(foundMail);

// Array.prototype.filter() item == argumnet 즉, item이 email이여도 상관 X
const filterMail = emails.filter(item => !item.includes("@gmail"));
console.log(filterMail);

// Array.prototype.forEach() item == argumnet 즉, item이 email이여도 상관 X
const forMail = emails.forEach(item => {
  console.log(item.split("@")[0]);
});

const cleaned = [];
emails.forEach(email => {
  cleaned.push(email.split("@")[0]);
})
console.log("forEach :",cleaned);


// Array.prototype.map() -> map은 forEach지만 반환된 element들로 새로운 array를 만든다. <- return array
const mapMail = emails.map(email => email.split("@")[0]);
console.log("map :",mapMail);

// Array.prototype.map() -> map은 forEach지만 반환된 element들로 새로운 array를 만든다. <- return object
const mapObject = emails.map((email, index) => ({username : email.split("@")[0], index : index}));
// arrow function의 {}을 ()로 감쌋다 <- object를 return 하겠다
console.log(mapObject);
console.table(cleaned);

// implicit return(return을 안쓰고 return하는 즉, email => email.split("@")[0]와 같이)은 {}을 사용하면 사용하지 못하고
// ()을 같이쓰면 object도 return이 가능하다.