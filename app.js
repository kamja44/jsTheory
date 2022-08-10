// generator -> 기본적으로 pause 할 수 있는 함수
function* listPeople(){
  /// yield <- generator에서 yield는 return과 같은 역할을 한다.
  yield "kamja";
  yield "kokumi";
  yield "potato";
}
const listG = listPeople();
console.log("First",listG.next()); // 첫 번째 yield인 kamja를 value로 반환, done : false <- 반환할 yield가 남아있다.
console.log("second",listG.next()); // 두 번째 yield인 kokumi를 value로 반환, done : false <- 반환할 yield가 남아있다.
console.log("Third",listG.next()) // 세 번째 yield인 potato를 value로 반환, done : false <- 반환할 yield가 남아있다.
console.log("Fourth", listG.next()); // 네 번째 yield인 undefined를 value로 반환, done : true <- 반환할 yield가 없다.

const friends = ["kamja","potato","tomato"];
function* friendTeller(){
  for(const friend of friends){
    yield friend;
  }
}
const friendLooper = friendTeller();
console.log(friendLooper.next());