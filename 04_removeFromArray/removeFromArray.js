const removeFromArray = function(startingArray, ...afterArray) {
     for (let i = 0; i < startingArray.length; i++) {
        if (afterArray.includes(startingArray[i])) {
            startingArray.splice(i, 1);
            i--
        };
    };
    return startingArray;
};

// Do not edit below this line
module.exports = removeFromArray;
