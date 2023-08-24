// console.log(+"1" + +"1" + "2");
let ans  = () => {
    console.log(arguments);
}
// ans(3,4,5);
function test() {
    console.log(arguments);
}
// test(2,3,4,5,6);

function test1(value,fn = () => value) {
    var value = 10;
    console.log(fn()); 
}
// test1(80);

// console.log(+"1" - -"1");
// console.log([] + ![]);
console.log([] + []);
// console.log(true + false);

// function test2(num) {
//     return [num + 1 , 5 , 8]
// }
// console.log();
console.log(typeof typeof Object == typeof typeof null);