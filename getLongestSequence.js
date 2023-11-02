/**
 * Returns the longest increasing subsequence of an array of numbers.
 * @param {number[]} array - The input array of numbers.
 * @returns {Object} An object containing the start index, end index, and subsequence array of the longest increasing subsequence.
 * If the input array is empty, the start and end indices will be -1 and the subsequence array will be empty.
 */
function getLongestSequence(array) {
    let startAt = 0;
    let finishAt = 0;
    let maxLength = 1;
    let currentLength = 1;
    let subsequence = [];

    if (!array.length) {
        return { startAt: -1, finishAt: -1, subsequence };
    }

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            currentLength++;
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                finishAt = i - 1;
                startAt = finishAt - maxLength + 1;
            }
            currentLength = 1;
        }
    }
    
    if (currentLength > maxLength) {
        maxLength = currentLength;
        finishAt = array.length - 1;
        startAt = finishAt - maxLength + 1;
    }

    subsequence = array.slice(startAt, finishAt + 1);

    return {
        startAt,
        finishAt,
        subsequence
    };
}

// const array = [1, 10, 5, 7, 19, 3, 24, 2, 6, 19, 34, 13, 3];
// console.log(getLongestSequence(array));
module.exports = getLongestSequence;
