function reverse(num , digit){
    return num == 0 ? digit + '' : digit + reverse(parseInt(num / 10) , num % 10);
    // if(num == 0){
    //     return digit + ''
    // }
    // return digit + reverse(parseInt(num / 10) , num % 10);
}
let num = parseInt(reverse(764876, 0));
console.log(num);

