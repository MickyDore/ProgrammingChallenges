/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    for (let i = 0; i < s.length;) {
        if (decodeChar(s.charAt(i)) < decodeChar(s.charAt(i+1))) {
            sum += decodeChar(s.charAt(i+1)) - decodeChar(s.charAt(i))
            i+=2;
        } else {
            sum += decodeChar(s.charAt(i));
            i++
        }
    }

    return sum;
};

decodeChar = (c) => {
    switch(c) {
        case "I":
            return 1;
            break;
        case "V":
            return 5;
            break;
        case "X":
            return 10;
            break;
        case "L":
            return 50;
            break;
        case "C":
            return 100;
            break;
        case "D":
            return 500;
            break;
        case "M":
            return 1000;
            break;
    }
}
