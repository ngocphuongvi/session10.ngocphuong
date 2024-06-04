let arr = [1, 2, 3, "a", "b", "c"];
let c = false;
let n = prompt("Hãy nhập một giá trị bất kỳ");
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
        console.log("i", i, "giatri", arr[i]);
        c = true;
    }
}
if (c == false) {
    console.log("phần tử không tồn tại")
}
