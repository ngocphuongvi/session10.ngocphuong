let arr1 = [1, 2, 3, 4, 5];
let arr2 = [-3, -1, 0, 1, 5];
let arr3 = [1, 5, 6, 7];
let arr4 = [...new Set(arr1)].filter(item => arr2.includes(item));
let newArr = [...new Set(arr4)].filter(item => arr3.includes(item));


console.log("newArr", newArr)
