// set <- Unique <- value 중복 불가 즉, 중복된 value들은 삭제된다.(하나만 저장된다.)

const sexySet = new Set([1,2,3,4,5,6,7,7,7,7,8]);
// value는 배열로 할당한다.
console.log(sexySet);


// sexySet에 9라는 value가 있는지 확인
console.log(sexySet.has(9));
sexySet.delete(1);
console.log(sexySet);
sexySet.clear();
console.log(sexySet);
sexySet.add("Hi");
console.log(sexySet);
console.log(sexySet.size);