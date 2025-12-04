const leapYears = function(year) {
    // a year is a leap year if (Divisible by 4) AND (NOT Divisible by 100 OR Divisible by 400)
    return (year % 4 === 0 && year % 100 !==0) || year % 400 === 0; 

};

// Do not edit below this line
module.exports = leapYears;
