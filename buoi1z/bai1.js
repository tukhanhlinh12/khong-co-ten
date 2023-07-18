// 1. Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.

function reverseString(str) {
    return str.split('').reverse().join('');
}

const originalString = "abcedf";
const reversedString = reverseString(originalString);
console.log(reversedString);