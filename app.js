// Proxy
const userObj = {
  username : "kamja",
  age : 20,
  password : 1234,
}
const userFilter = {
  get : (target, prop, receve) => {
    // console.log("target",target); // target <- real Object
    // console.log("prop",prop); // prop <- 내가 요청한 property
    // console.log("receve",receve); // return proxy
    // return target[prop];
    return prop === "password" ? `${"*".repeat(5)}` : target[prop];
  },
  set : () => {
    console.log("Somebody wrote Something");
  },
  deleteProperty : (target, prop) => {
    if(prop === "password"){
      return "FALSE";
    }else{
      target[prop] = "DELETE"
    }
  }
};

// userObj의 event를 가로챈 후 userObj의 접근을 막는다.
const filterUser = new Proxy(userObj, userFilter);
console.log(filterUser);
console.log(filterUser.age);