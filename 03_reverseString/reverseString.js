const reverseString = function(string) {
    const charArray = string.split("");
    charArray.reverse();
    return charArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
