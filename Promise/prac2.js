// function xyz(){
//     console.log('func xyz');
//     test();
//     console.log('run test');
// }


// function test(){
//     console.log('func test');
//     promise()
//         .then((val) => console.log(val))
//         .catch((error) => console.log(error));
//     console.log('call promise');
// }

// function promise(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Promise')
//         }, 1000);
//     })
// }

// xyz();

let textPassword = (Math.random() + 1).toString(36).substring(3);
console.log((Math.random() + 1).toString(36).substring(3,6));