const leapYears = function(year) {
    return "true" ? ((year % 4) === 0) || ((year % 400) === 0) : ((year % 100) === 0)
};

// Do not edit below this line
module.exports = leapYears;
