let arr1 = [1,2,3,4,5,6];
let arr2 = [1,2,3];

function addElement(arr1,arr2) {
    if (arr1 instanceof Array && arr2 instanceof Array) {
        let sumArray = [];
        let loopEnd = arr1.length > arr2.length ? arr1.length : arr2.length;
        let maxArr = arr1.length > arr2.length ? arr1 : arr2;  
        for (let i = 0; i < loopEnd; i++) {
            if (arr1[i] && arr2[i]) {
                sumArray[i] = arr1[i] + arr2[i]
            }else{
                sumArray[i] = maxArr[i];
            }
        } 
        return sumArray;
    }else{
        return "Please provide array"
    }
}

// console.log(addElement(arr1,arr2));


function addElement(arr1,arr2) {
    if (!(Array.isArray(arr1)) || !(Array.isArray(arr2))) {
        return "Please provide array."
    }
    let sumArray = [];
    let end = Math.max(arr1.length,arr2.length);
    for (let i = 0; i < end; i++) {
        sumArray[i] = (arr1[i] || 0) + (arr2[i] || 0);
    }
    return sumArray;
}

console.log(addElement(arr1,90));

console.log((arr1[0] || 9));

// with recurrsion
function addElementRecursive(arr1, arr2, index = 0, sumArray = []) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Please provide arrays";
    }
    if (index < Math.max(arr1.length, arr2.length)) {
        sumArray[index] = (arr1[index] || 0) + (arr2[index] || 0);
        return addElementRecursive(arr1, arr2, index + 1, sumArray);
    }

    return sumArray;
}