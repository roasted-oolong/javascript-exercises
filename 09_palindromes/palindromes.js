const palindromes = function (str) {
    let storage = [];
    let filter = /[\W_]/g;
    let lowerCaseStr = str.toLowerCase().replace(filter, '');
    let reverseStr = lowerCaseStr.split('').reverse().join(''); 
    return reverseStr === lowerCaseStr;
};

// Do not edit below this line
module.exports = palindromes;
