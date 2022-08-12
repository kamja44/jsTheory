const person = {
    name : "kamja",
    age : 20
}
// Object의 value만 출력
console.log(Object.values(person));
// Object의 Entries <- Entries는 배열의 배열을 return한다. 
console.log(Object.entries(person)); // Key값의 이름과 값이 배열의 형태로 들어간다.
console.log(Object.entries(person).forEach(item => console.log(item[0], item[1])));

// Object.fromEntries <- 배열의 배열에서부터 Object를 만든다.
console.log(Object.fromEntries([["name","kamja"],["age",20],["fried","potato"],["hi",true]]));
// 즉, 배열의 배열로 Object를 생성한다.  