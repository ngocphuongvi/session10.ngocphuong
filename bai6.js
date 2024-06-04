let arr = [1, 2, -1, 3, -2, -3];
let arr1 = [];
let arr2 = [];
for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arr1.push(arr[i]);
        // newArr.push(arr1);
    }
    if (arr[i] > 0) {
        arr2.push(arr[i])
    }
}
console.log("new arr", arr1.concat(arr2))
