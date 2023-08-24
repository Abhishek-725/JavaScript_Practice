"use strict";

// function f() {
//   return 1;
// }

// {
//   function f() {
//     return 2;
//   }
// }

// console.log(f() === 1 );// true

// console.log(f() === 2);//  in non-strict mode
let shouldDefineZero = 0;
if (shouldDefineZero) {
    function zero() {
      // DANGER: compatibility risk
      console.log("This is zero.");
    }
}

// zero();

// function* generator() {
//  let index = 0;
//  while (true) {
//  yield index++;
//     }
//   }
//   const gen = generator();
//   for (let value of gen) {
//     console.log(value);
//   }
  
//   const gen = generator(); // "Generator { }"
  
//   console.log(gen.next().value); // 1
//   console.log(gen.next().value); // 2
//   console.log(gen.next().value); // 3

// xyz();
// console.profile('MyProfile')
function xyz() {
    console.log('Function_______');
}

funExp1(); //funExp1 is not a function
var funExp1 = function (){
    console.log('FuncExp');
}
console.time('start');
funExp2(); //ReferenceError: Cannot access 'funExp2' before initialization
let funExp2 = function (){
    console.log('FuncExp');
}


console.table([{ name : 'abhi' , age : 20},{name : 'ram', age : 25}]);
console.timeLog('start');
console.timeEnd('start');
// console.profileEnd('MyProfile');
