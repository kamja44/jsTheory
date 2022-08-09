// class => blueprient(청사진)
class User{
  // constructor <- 생성자
  constructor(name = "kamja"){
    this.username = name;
  }
  // function
  sayHello(){
    console.log(`Hello, I am ${this.username}`);
  }
}

const sexyUser = new User(); // User class 생성
// 즉, sexyUser = User class의 instance
// instance === alive Class
const uglyUser = new User("potato");


sexyUser.sayHello();
uglyUser.sayHello();



// const baseOjbect = {
//   username : "Kamja",
//   sayHello : function(){
//     console.log("potato kamja");
//   },
// }

// const kamjaUser = baseOjbect;
// kamjaUser.sayHello()