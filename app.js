// class => blueprient(청사진)
class User{
  // constructor <- 생성자
  constructor({username, lastName, email, password}){
    // this는 기본적으로 클래스 안에서 볼 수 있고, 클래스 그 자체를 가리킨다.
    this.username = username;
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
    if(this.password === currentPassword){
      this.password = newPassword;
      
    }else{
      console.log("Can't change Password");
    }
  }
}

const sexyUser = new User({
  username : "Kamja",
  lastname : "Potato",
  email : "kamja@potato.com",
  password : 4444
});
// extends Class
class Admin extends User{
  constructor({username, lastName, email, password, superAdmin, isActive}){
    super({username, lastName, email, password}); // super <- 부모의 클래스 호출 즉, User 클래스 호출
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }
  deleteWebsite(){
    console.log("Delete the whole Website");
  }
}

const admin = new Admin({
  username : "adminKamja",
  lastname : "adminPotato",
  email : "adminkamja@potato.com",
  password : 444444,
  superAdmin : true,
  isActive : true,
})
// admin 인스턴스가 User 호출 -> 가능 |||| User 인스턴스가 admin 호출 ->불가능