// // for(var i=0 ; i<10 ; i++);{
// //     console.log(i)
// // }

// // console.log(undefined + 7878 == 7878)

// // function factorial(n){
// //     if (!NaN(n)) return 'Please enter number..'
// //     if (n === 0) return 1;
// //     return n * factorial(n - 1);
// // }
// // let result = factorial(5);
// // console.log(result);

// // console.log(null -1 + "")

// // async function test() {
// //     console.log(1);
// //     console.log(await 1);
// //     console.log(3);
// // }
// // console.log(test());

// // async function test() {
// //   console.log(1);
// //   await setTimeout(() => {
// //     console.log(2);
// //   }, 1000);
// //   console.log(3);
// // }

// // console.log(test());

// // async function test() {
// //     console.log(1);
// //     let a = await 1;
// //     console.log(a);
// //     console.log(3);
// // }
// // console.log(test());


// // const arr = ["sgh", "wrte", "frgsag"]


// //   arr.forEach(async(item, i) => {
// //     await new Promise(async res => {
// //       console.log(item);
// //       setTimeout(async() => {
// //         console.log(i)
// //         res()
// //       }, 1000);
// //       console.log('hi');
// //     });
// //       console.log(44)
// // });


// // const processArray = async(arr) => {
// //     for (let i = 0; i < arr.length; i++) {
// //       const item = arr[i];
// //   //     console.log(item);
// //       await new Promise((res) => {
// //         console.log(item);
// //         setTimeout(() => {
// //           console.log(i);
// //           res();
// //         }, 1000);
// //   console.log('ji');
// //       });
// //       console.log(44);
// //     }
// //   }
  
// //   processArray(arr);
  
// let arr = ["a","b","c","d"]
// let res = ()=>{
//     arr.forEach(async(item,i)=>{
//         return  new  Promise((res,rej)=>{
//           console.log(item)
//         setTimeout(()=>{
//             console.log(i);
//             res()
//         },1000);
//         // console.log('hi');
//         }
        
//         )
//     })
// }
// async function test(){
//     let ans = await res();
//     // console.log(ans);
// }
// // test();

// let a = [1,'t'];
// function test20(a) {
//     if (a) {
//         const n = a.map( v => parseInt(v));
//         console.log(n);
//     }
// }
// test20(a);
// console.log(a.filter((val) => !isNaN(val)).map((val) => parseInt(val)));
// if (a.filter((val) => Number(val)).map((val) => parseInt(val)).length > 0) {
//  console.log(isNaN('ji'));   
// }

console.log("Welcome to Programiz!");
function isPrime (num){
    if (num === 1 || num === 0) return false;
    for( i = 2; i <= parseInt(num / 2); i++){
        if(num % i === 0){
            return false
        }
    // for(let i = 2; i <= parseInt(num / 2); i++){
    //     if(num % i === 0){
    //         return false
    //     }
    }
    return true
}
let count = 0;
for(var i = 2; i < 100; i++){
    if(isPrime(i)){
        if (count >= 3) {
            break;
        }
        console.log(i);
        count++;
    }
}