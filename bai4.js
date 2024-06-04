let a = +prompt("Nhập vào số nguyên dương a")
let b = +prompt("Nhập vào số nguyên dương b")
let c = []
for (let x = 1; x <= a; x++) {
    if (x % b === 0) {
        c.push(x)
    }
}
for (let y = 1; y <= b; y++) {
    if (y % a === 0) {
        c.push(y)
    }
}
console.log("array", c)
