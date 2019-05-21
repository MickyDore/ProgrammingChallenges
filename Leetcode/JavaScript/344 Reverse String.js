/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let index = s.length - 1
    let temp = "";
    for (var i = 0; i < s.length / 2; i++){
        temp = s[index];
        s[index] = s[i];
        s[i] = temp;
        index--;
    }
};
