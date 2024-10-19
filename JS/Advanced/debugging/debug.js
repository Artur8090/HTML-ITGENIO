function copyArrayWithoutRepeats(arr) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (!isRepeat(i)) result.push(arr[i]);
    }
    return result;


    function isRepeat() {
        for (let j = i + 1; j < array.length; j++)
            if (arr[i] === arr[j]) return false;
        return true;


    }
}
const array = [1, 1, 1, 2, 3, 1, 1, 3, 6, 6, 7, 8, 7];
const result = copyArrayWithoutRepeats(array);
console.log(result)