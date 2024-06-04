let arr = [1, 2, 3, 3, 11, 5, 6, 7, 9, 8];
let a = +prompt("Nhập 1 số bất kỳ");
let newArr = [];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === a) {
        newArr.push(arr[i]);
        console.log(" newArr", newArr)
    }
}




