// finally
const p1 = new Promise((resolve, reject) => {
    // setTimeout(resolve, 3000, "First");
    setTimeout(reject, 3000, "error");
})
  .then((value) => console.log(value))
  .catch(error => console.log(error))
  .finally(() => console.log("Im done"));
  // finally <- then이 실행된 후 실행