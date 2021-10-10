const emails = [
  "kamja@naver.com",
  "naver@google.com",
  "kkamja@gmail.com",
  "kkkamja@hanmail.net",
];

const foundMail = emails.find((item) => true);
console.log(foundMail);
const foundMail1 = emails.find((item) => item.includes("@gmail.com"));
console.log(foundMail1);

const noGmail = emails.filter((email) => !email.includes("@gmail"));
console.log(noGmail);

emails.forEach((email) => {
  console.log(emails.split("@")[0]);
});

const cleaned = emails.map((email) => email.split("@")[0]);

const cleaned1 = emails.map((email, index) => ({
  username: email.split("@")[0],
  index,
}));

// default value
function sayHi(Name = "missing") {
  return "Hello" + Name;
}
console.log(sayHi());

const sayHiArrow = (Name = "missing") => "Hello" + Name;
