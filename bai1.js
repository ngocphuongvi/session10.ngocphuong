console.log("bai1")
let a = [2, 3, "5", "ab", -3, 1.1]
let b = ["a", "b", "c", 4]
let c = false;
for (let i = 0; i < b.length; i++) {

    if (typeof b[i] == "number") {
        console.log("i", i, "value", b[i])
        c = true;
    }
}
if (c == false) {
    console.log("mảng không có số nguyên")
}

