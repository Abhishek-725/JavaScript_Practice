// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// let set = setTimeout(greet, 1000,"Abhi");
// console.log(set);
// clearTimeout(set);


// setTimeout(function run() {
//     for (let i = 0; i < 10000000; i++) {

//     }
//     for (let i = 0; i < 1000000000; i++) {

//     }
//     console.log("===============Set Time Out ===========");
//     setTimeout(run, 1000);
// }, 1000);

// setInterval(() => {

//     for (let i = 0; i < 1000000000; i++) {

//     }
//     for (let i = 0; i < 1000000000; i++) {

//     }
//     console.log("===============Set Interval ===========");
// }, 1000);

// function promise1() {
//     setTimeout(() => {
//         // console.log("setTimeout Promise");
//         return Promise.resolve(1);
//     }, 1000);
//     return new Promise((resolve) => {
//         resolve(50);
//     });
// }

// async function run(){
//     let a = await promise1();
//     console.log(a);
//     console.log(a);
// }
// run();



// Array.prototype.myForEach = function (callBack,thisArgs) {
//     let arr = this;

//     for (var i = 0; i < arr.length; i++) {
//        callBack.call(this,arr[i],i,arr);
        
//     }
// }

// let array = [1,2,3,4,5,6];

// let a1 = array.myForEach((val) => {
//      console.log(val > 5 ? true : false);
//  })
// console.log(a1);

async function test2(params) {
   return new Promise((res) => {
    setTimeout(() => {
        res("hello")
    }, 1000);
   })
}

async function run2(){
    let a =  test2();
    console.log(a);
}
run2();