// const days = ["Mon", "Tue", "Wed"];

// // array destructuring
// const [mon, tue, wed, thu = "Thu"] = days;
// console.log(mon, tue, wed, thu);

// function destructuring
const days = () => ["Mon", "Tue", "Wed"];

const [mon, tue, wed, thu = "Thu"] = days();
console.log(mon, tue, wed, thu);
