// async function xyz (){
//     try{
//       let result =  await Promise.reject(34);
//       return result;
//     } catch(err){
//         console.log("Error : ",err);
//     }


 
//   }

//   xyz()
//   .then((val => console.log(val)))
//   .catch((err) => console.log('catch :',err));



// async function xyz2(){
//     return  new Promise(function() {
//         setTimeout(function() {
//            throw 'or nah'; 
//         //    Promise.reject('or nah')
//           // return Promise.reject('or nah'); also won't work
//         }, 1000);
//       }).catch(function(e) {
//         console.log('function :',e); // doesn't happen
//       });
// }
"use strict";
async function xyz2(){
    try {
        // throw 'hi throws error';
        console.log('hi');
      let result =  await Promise.resolve(34);
      console.log('entering in catch');
    } catch (error) {
        console.log('function : ',error);
    }
}

xyz2()
 .then((val) => {
    console.log("val : ",val);
 })
 .catch((err) => {
    console.log("catch : ",err);
 });
