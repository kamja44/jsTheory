class Counter{
  constructor({initialNumber = 0, counterId, plusBtn, minusBtn}){
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.counter.innerText = initialNumber;
    this.plusBtn = document.getElementById(plusBtn);
    this.minusBtn = document.getElementById(minusBtn);
    this.addEventListeners();
  }
  // eventListener 안에 event의 handler를 넣으면 event target을 가르키는 this를 가지게 된다.(arrow function을 사용하지 않은 경우)
  // arrow function 사용 시 this는 class를 가리킨다.
  addEventListeners = () => {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  }
  increase = () => {
    this.count = this.count + 1;
    this.repaintCount();
  }
  decrease = () => {
    this.count = this.count - 1;
    this.repaintCount();
  }
  repaintCount = () => {
    this.counter.innerText = this.count;
  }
}

new Counter({
  counterId : "count",
  plusBtn : "add",
  minusBtn : "minus",
});
new Counter({
  counterId : "count2",
  plusBtn : "add2",
  minusBtn : "minus2",
  initialNumber : 100,
})