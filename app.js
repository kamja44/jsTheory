let hours = 12;
let minutes = 3;
let seconds = 2;
console.log(`${hours}h : ${minutes}m : ${seconds}s`);
// minutes와 seconds를 2자리 수로 표현
// padStart, padEnd는 String을 사용하는 함수 -> String(minutes).padStart(2,"0") <- minutes가 1자리일 경우 앞에 0을 붙여 2자리로 만든다.
console.log(`${hours}h:${String(minutes).padStart(2,"0")}m:${String(seconds).padStart(2,"0")}s`);
console.log("5".padStart(5,"x"));
console.log("5".padEnd(5,"x"));
console.log("1".padStart(2,"0").padEnd(3,"s"));