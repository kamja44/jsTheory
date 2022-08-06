const isEmail = (email) => email.includes("@");
console.log(isEmail("kamja@kamja.kamja"));

const CC_NUMBER = "4444";

const displayName = `${"*".repeat(10)}${CC_NUMBER}`;
console.log(displayName);

const name = "Mr.kamja";
console.log(name.startsWith("Mr"));
console.log(name.endsWith("Mr"));
