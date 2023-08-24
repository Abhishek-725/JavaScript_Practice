const _ = require('underscore');

let oldpermission = [1  , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
let permission = [1  , 3 , 4 , 11 , 9 , 10];


let add  = _.difference(permission,oldpermission);
console.log(add);
let diff  = _.difference(oldpermission,permission);
console.log(diff);


// console.log(_.unique([1 , 3 , 2 , 2 , 1, 4 ,5 , 6, 4, 2]));



