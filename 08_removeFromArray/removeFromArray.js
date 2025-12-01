const removeFromArray = function(arr, ...toRemove) {
    return arr.filter(element => {
        return !toRemove.includes(element);
    })
};

// Do not edit below this line
module.exports = removeFromArray;
