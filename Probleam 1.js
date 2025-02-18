function countConsecutiveChars(str) {
    let result = {};
    let currentChar = str[0];
    let currentCount = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === currentChar) {
            currentCount++;
        } else {
            result[currentChar] = currentCount;
            currentChar = str[i];
            currentCount = 1;
        }
    }

    return result;
}


let str = "AAABBBCCCDDDD";
let result = countConsecutiveChars(str);
console.log(result);