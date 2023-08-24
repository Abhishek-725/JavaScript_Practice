// let obj1 = {
//     name : "Abhi",
//     city : "Mumbai",
//     getInfo : () => {
//         return `${this.name} from ${this.city}`
//     }
// }

// let obj2 = {
//     name : "xyz",
//     city : 'Dolak'
// }

// obj2.__proto__ = obj1;
// console.log(obj2.city);

// let sayName = function(name) {
//     console.log(this.name);
// };


// let sayName1 = (name) => {
//     console.log(this.name);
// };

// sayName1();
// window.name = 'Tapas';
// sayName1();

// const test = {
//     prop: 42,
//     func: function () {
//       return this.prop;
//     },
//   };
  
// console.log(test.func());

// function getThis() {
//     return this;
//   }
  
//   const obj1 = { name: "obj1" };
//   const obj2 = { name: "obj2" };
  
//   obj1.getThis = getThis;
//   obj2.getThis = getThis;
  
//   console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
//   console.log(obj2.getThis());
// console.log("==============",obj1);

//   const obj3 = {
//     __proto__: obj1,
//     name: "obj3",
//   };
  
//   console.log(obj3.getThis());
//   console.log(obj3);

// const globalObject = this.name = "anjmncj";
// console.log(this);
// const foo = () => this;
// console.log(foo());
// console.log(foo() === globalObject);

function getThisStrict() {
    "use strict"; // Enter strict mode
    return this;
  }
  
  // Only for demonstration — you should not mutate built-in prototypes
  Number.prototype.getThisStrict = getThisStrict;
  console.log(typeof (1).getThisStrict());