const DEFAULT = "lalala";

function sayHi(aName = "anon"){
  return "Hello " + aName;
}
const Hi = (aName = DEFAULT) => "Hello "+aName;

console.log("normal Function",sayHi());
console.log("arrow Function", Hi());