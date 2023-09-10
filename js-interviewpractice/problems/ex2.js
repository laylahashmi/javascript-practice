// What will be logged in the first example and in the second example?
//

let var1;
console.log(var1);
console.log(typeof var1);

let var2 = null;
console.log(var2);
console.log(typeof var2);

console.log(foo);
var foo = 2;

//same as
// var foo
// consolelog(foo)
// foo = 2
// this is called hoisting (foo bubbles to the top, needs to defined before console.log)
// using const or let avoids bubbling
