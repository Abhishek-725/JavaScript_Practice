// console.log("Welcome to Programiz!");
// function isPrime (num){
//     if (num === 1 || num === 0) return false;
//     for(i = 2; i < num; i++){
//         if(num % i === 0){
//             return false
//         }
//     }
//     return true
// }

// for(var i = 2; i < 100; i++){
    
//     if(isPrime(i)){
//         console.log(i)
//     }
// }

// {a = 7 //ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a = 5;
// console.log(a);}

// console.log(1);

// function name1() {
//     let a =  Promise.resolve(2);    
//     console.log(a.then((result) => {
//         console.log('result : ',result);
//     }).catch((err) => {
//         console.log(err);
//     }));
// }
// name1();
// console.log(2);
// console.log('end');

// function counter() {
//     let count = 0;
//     return function(){
//         console.log(++count);
//     }
// }
// let count = counter();
// for (let i = 0; i < 4; i++) {
//     count();
// }


let obj3 = {
    name :"Abhi",
    age : 34,
    address : "ABhjdjwd",
    aadhar : undefined
}

Object.keys(obj3).map((value) => {
    if (obj3[value] === undefined) {
        delete obj3[value];
    }
})
console.log(obj3);


