function palindrome(str) {
    let reversedStr = "";
    const strArr = str.split("");
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += strArr[i];
    }

    if (reversedStr === str) {
        return true;
    }
    return false;
}
console.log(palindrome('racecar')) // true
console.log(palindrome('tacos')) // false