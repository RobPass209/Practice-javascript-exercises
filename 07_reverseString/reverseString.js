const reverseString = function(string) {
    let backwardString = "";
    for (i = string.length - 1; i >= 0; i--){
        backwardString += string[i]
    }
    return backwardString



};

// Do not edit below this line
module.exports = reverseString;
