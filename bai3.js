
function count_element_in_array(array, n) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n)
            count++;
    }
    console.log("phan tu " + n + " xuat hien " + count + " lan");
}

let array = [1, 2, 3, 4, 4, 4, 5, 5, 6];
let n = +prompt("Hãy nhập một số nguyên bất kỳ");

count_element_in_array(array, n);
