// Equilibrium Index

let array = [1, 2 ,3 , 4];

function equilibrium() {
    for (let i = 0; i < array.length; i++) {
        if (checkEquilibrium(i)) {
            return i;
        }
    }
    return -1;
}

function checkEquilibrium(equ) {
    let leftsum = 0;
    let rightsum = 0;
    for (let i = 0; i < equ; i++) {
        leftsum+= array[i];  
    }
    for (let j = equ + 1; j < array.length; j++) {
        rightsum+= array[j]
    }
    if (rightsum || leftsum) {
        return rightsum === leftsum ? true : false;
    }
   
}

console.log(equilibrium());