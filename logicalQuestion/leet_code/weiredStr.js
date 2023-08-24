function weiredString(str) {
    str = str.trim();
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
            if (i % 2 === 0) {
                newStr+= str[i].toUpperCase();
            }else{
                newStr+= str[i].toLowerCase()
            }
    }
    return newStr;
}
console.log(weiredString("A test case"));


//Q.==== Function which returns a random number in the given range
// Create a function which returns a random number in the given 
// range of values both inclusive
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	let ran = Math.ceil(Math.random()*rangeEnd);
    if(ran < rangeStart ){
        ran+= rangeStart
    }
	return ran;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)

//ArmStrong

function armStrong(num){
    let original = num;
    let sum = 0;
    while(num > 0){
        let n1 = (num % 10);
        sum+= n1 ** 3;
        num = parseInt(num / 10);
    }
    return sum === original ? true : false;
}

for(let i = 2;i <= 500 ; i++){
    if(armStrong(i)) {
        console.log(i)
    };
}