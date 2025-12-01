const removeFromArray = function(mainArray, ...remove) {
    let newArray = [];
    for (let i = 0; i < mainArray.length; i++) {
        let element = mainArray[i];

        if (!remove.includes(element)) {
            newArray.push(element);
        }
    }

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
