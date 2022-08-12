let nArray = [1,2,3,4,5,6];
// flat <- 배열의 요소들을 추출한다.
let fArray = [1,[2],[[8], [8], [[[8], [8], [[6], [5], [3]]]]]];
// array.flat("원하는 깊이"); default = 1
console.log(fArray.flat());
console.log(fArray.flat(2));
console.log(fArray.flat(3));
console.log(fArray.flat(4));
console.log(fArray.flat(5));