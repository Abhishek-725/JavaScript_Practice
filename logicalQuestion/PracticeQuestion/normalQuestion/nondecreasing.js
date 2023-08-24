function nonDecreasing(array) {
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
       if (count > 1) break;
        if (array[i] > array[i + 1] ) {
            count++;
            if (array[i - 1] > array[i + 1]) {
                count++;
            }
        }
    }
    return count > 1 ? false : true;
}

// let array = [8 , 4 , 6];
// let array = [8 , 4 , 2];
// let array = [-2 , 7 , -1 , 0 , 1 ,2];
// let array = [-10 , 10 , 0 , 10 , 3];
let array = [-92 ,-82 ,-49, -46, 3 ,37, 40, 41, 55 ,85];
let array1 = [-98 ,289 ,-80 ,-73 ,-25, -17 ,-4 ,22 ,76 ,95];
console.log(nonDecreasing([-88 ,-77 ,-57 ,-54, -41, 2 ,212, -157, 34 , 68]));
[-88 ,-77 ,-57 ,-54, -41, 2 ,212, -157, 34 , 68]
[-85 ,-82, 315, -54, -51, 36 ,45, 66, -123, 100]


// import java.util.* ;
// import java.io.*; 
// public class Solution {
// 	public static boolean isPossible(int[] arr, int n) {
// 		// Write your code here.
// 		int count = 0;
// 		for (int i = 0; i < arr.length - 1; i++) {
// 			if (count > 1) {
// 				break;
// 			}
// 			if ((arr[i] - arr[i + 1] ) > 0) {
// 				count++;
// 			}
// 		}
// 		return count > 1 ? false : true;
// 	}
// }