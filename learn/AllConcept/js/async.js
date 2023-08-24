// async function test() {
//    try {
//     return new Promise((resolve,reject) => {
//         reject(new Error('Promise Error'));
//     })
//    } catch (error) {
//     console.log('test func error',error);
//    }
// }

// test()
//     .then((val) => {
//         console.log('val',val);
//     })
//     .catch((err) => {
//         console.log('Error :=> ',err);
//     })


async function xyz2(){
    try {
    return  new Promise(function(resolve,reject) {
    setTimeout(function() {
        // resolve(67);
        reject('or nah');
        //    throw 'or nah'; 
        //    Promise.reject('or nah')
        //   return Promise.reject('or nah'); //also won't work
    }, 1000);
    })
    //   .catch(function(e) {
    //     console.log('function :',e); // doesn't happen
    //   });  
    } catch (error) {
        console.log('try-catch',error);
    }
}

xyz2()
 .then((val) => {
    console.log("val : ",val);
 })
 .catch((err) => {
    console.log("catch : ",err);
 });

 let map = new Map();
 map.set('1',1).set('2',2)

 console.log(map.get('1'));