// var state = {
//     msg : "hello"
// }
// function runner(){
//     console.log(this.msg);
// }
// runner.bind(state)()
// function print(num)  {
//     setTimeout(() => {
//         console.log(num);
//     }, num * 1000);
// }

// function test() {
//     for (var i = 1; i <= 10; i++) {
//         print(i);
//     }
// }

// test();

// function foo() {
//     var foo = 10;
//     if (foo) {
//         let foo = foo + 10;
//     }
// }
// foo();

let a = Object.keys(false);
console.log(a);