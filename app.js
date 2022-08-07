// variable swapping
// let mon = "Sat";
// let sat = "Mon";

// [sat, mon] = [mon, sat];
// console.log("mon", mon, "sat", sat);

// array에서 특정 값 생략 Skipping
const days = ["mon", "tue", "wed", "thu", "fri"];
const [, , , thu, fri] = days;
console.log(thu, fri);
