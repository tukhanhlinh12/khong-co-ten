// 2. Viết một function xoá các phần từ trùng lặp trong một mảng các số.

function removeDuplicates (arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
const originalArray = [1, 2, 3, 5, 4, 2, 6, 4];
const removeArray = removeDuplicates(originalArray);
console.log(removeArray);