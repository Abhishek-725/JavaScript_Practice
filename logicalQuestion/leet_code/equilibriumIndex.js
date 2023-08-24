let arr1 = [1 , 7 , 3 , 6 , 5 , 6];//3
let arr2 = [1, 2, 2, 9 ,3 ,2]; //3
let arr3 = [1, 2 ,3 ,4]; //-1

function equilibrium(arr) {
    if (arr instanceof Array && arr.length > 2) {
        let leftSum = 0;
        for (let i = 0 ; i < arr.length ; i++) {
            leftSum  += arr[i];
            let rightSum = sumRightPart(i + 2,arr);
            console.log(leftSum,'===',rightSum);
            if (leftSum === rightSum) {
                return i + 1;
            }
        }
        return -1;
    } else {
        return -1;
    }
}

//  

function sumRightPart(start,arr){
    let sum = 0;
    for (let i = start ; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(equilibrium(arr3));