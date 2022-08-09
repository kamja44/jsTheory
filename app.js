class Counter{
  constructor({initialNumber = 0, counterId, plusBtn, minusBtn}){
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.plusBtn = document.getElementById(plusBtn);
    this.minusBtn = document.getElementById(minusBtn);
    this.addEventListeners();
  }
  addEventListeners(){
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  }
  increase(){
    this.count = this.count + 1;
    this.repaintCount();
  }
  decrease(){
    this.count = this.count - 1;
    this.repaintCount();
  }
  repaintCount(){
    this.counter.innerText = this.count;
  }
}

new Counter({
  counterId : "count",
  plusBtn : "add",
  minusBtn : "minus",
});