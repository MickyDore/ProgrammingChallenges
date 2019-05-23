/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    // Slower Solution
    // let arrS = s.split("").sort().join("");
    // let arrT = t.split("").sort().join("");
    // return arrS == arrT;

    //Faster Solution
    if (s.length !== t.length) {
        return false;
    }

    let dict = new Map();

    for (char of s) {
        let count = dict.has(char) ? dict.get(char) + 1 : 1;
        dict.set(char, count);
    }

    for (char of t) {
        if (!dict.has(char)) {
            return false;
        }

        let count = dict.get(char) -1;
        if (count === 0) {
            dict.delete(char)
        } else {
            dict.set(char, count)
        }

    }

    return dict.size === 0;

};
