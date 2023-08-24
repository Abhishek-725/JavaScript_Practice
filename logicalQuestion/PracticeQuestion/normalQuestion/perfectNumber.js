function perfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= parseInt(num / 2); i++) {
        if (num % i === 0) {
            sum+= i;
        }
    } 
    return sum === num ? true : false; 
}
function printPerfectNumber() {
    for (let i = 1; i < 500; i++) {
        if (perfectNumber(i)) {
            console.log("Perfect : ",i);
        } 
    } 
}

printPerfectNumber();

