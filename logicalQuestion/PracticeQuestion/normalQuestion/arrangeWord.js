let nameList = ["aaabc", "abhay", "aaaaaaaaaaa", "hjchwej", "annb"];

function checkAlpha(str,alpa){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === alpa) {
            count++;
        }
    }
    return count;
}
    
function sortNameList(){
    for (let i = 0; i < nameList.length; i++) {
        for (let j = i + 1; j < nameList.length; j++) {
            let c1 = checkAlpha(nameList[i],'a');
            let c2 = checkAlpha(nameList[j],'a');
            if (c1 > c2) {
                let temp = nameList[i];
                nameList[i] = nameList[j];
                nameList[j] = temp;
            }
        }   
    }
}
sortNameList();
console.log(nameList);





// let a = ["aaabc", "abhay", "aaaaaaaaaaa", "hjchwej", "annb"];
// const findCountOfLetter = (str, letter) => {
//   return str.split(letter).length - 1;
// };

// let op = a.sort(
//   (x, y) => findCountOfLetter(x, "a") - findCountOfLetter(y, "a")
// );
// console.log(op);

