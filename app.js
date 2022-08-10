// weakSet <- object만 저장 가능
const weakSet = new WeakSet();
const sexy = {
  im : true
};
weakSet.add(sexy);
console.log(weakSet);
weakSet.add({hello : true}); // weakSet 내부에서 생성된 코드
// {hello : true} Object는 아무곳에서도 참조하지 않는다. -> garbage Collector의 정리 대상
