/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (var i = 0; i < s.length; i++) {
        currChar = s.charAt(i);
        if ((s.indexOf(currChar) == i) && (s.lastIndexOf(currChar) == i)) {
            return i;
        }
    }
    return -1;
};
