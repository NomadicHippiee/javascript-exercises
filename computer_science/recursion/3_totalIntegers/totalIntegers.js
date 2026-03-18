const totalIntegers = function(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj) === false && typeof obj !== 'object') {
        return undefined;
    }

    let count = 0; 
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++ ) {
        const key = keys[i];
        const current = obj[key];

        if (Number.isInteger(current)) {
            count++;
        }

        if (typeof current === 'object' && current !== null) {
            count += totalIntegers(current);
        }
    }

    return count;
  
};
  
// Do not edit below this line
module.exports = totalIntegers;
