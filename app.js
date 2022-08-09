// class => blueprient(청사진)
class User{
  // constructor <- 생성자
  constructor(name = "kamja", lastName, email, password){
    // this는 기본적으로 클래스 안에서 볼 수 있고, 클래스 그 자체를 가리킨다.
    this.username = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  // function
  sayHello(){
    console.log(`Hello, I am ${this.username}`);
  }
  getProfile(){
    console.log(`${this.username} ${this.email}, ${this.password}`);
  }
  updatePassword(newPassword, currentPassword){
    // 이전 패스워드와 동일하다면 새로운 패스워드로 변경
    if(this.password === currentPassword){
      this.password = newPassword;
      console.log(`newPassword is ${this.password} it works!`);
    }else{
      console.log("Can't change Password");
    }
  }
}

const sexyUser = new User("Kamja","Potato","kamja@potato.com",4444); // User class 생성
// 즉, sexyUser = User class의 instance
// instance === alive Class
sexyUser.sayHello();

console.log(sexyUser.password);
sexyUser.updatePassword("hello", 4444);
console.log(sexyUser.password);

// extends Class
class Admin extends User{
  constructor(superAdmin){
    this.superAdmin = superAdmin;
  }
  deleteWebsite(){
    console.log("Delete the whole Website");
  }
}

const sexyAdmin = new Admin("adminKamja","adminPotato","adminkamja@potato.com",4444, true);
sexyAdmin.deleteWebsite();
console.log(sexyAdmin.email);