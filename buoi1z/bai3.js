// 3. Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng.

function findMostFrequentElement(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement = null;

    for (const element of arr) {
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
        if (frequencyMap[element] > maxFrequency) {
            maxFrequency = frequencyMap[element];
            mostFrequentElement = element;
        }
    }

    return { element: mostFrequentElement, frequency: maxFrequency };
}

const array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
const result = findMostFrequentElement(array);
console.log(`value: ${result.element}, count: ${result.frequency}`);
