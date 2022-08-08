const kamja = new Promise((resolve, reject) => {
    // resolve(2);
    reject("Error!!");
});

// promise chaning할 때 then의 return값이 있어야한다.
const timesTwo = (number) => number * 2;
// kamja
// .then(number => number * 2)
// .then(otherNumber => otherNumber * 2);
kamja
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(() => {
        throw Error("Something is wrong");
    })
    .then(lastNumber => console.log("lastNumber", lastNumber))
    .catch(error => console.log(error));