const pascal = function(n) {
    if (n === 1) {
        return [1];
    }

    const previousRow = pascal(n - 1);
    const currentRow = [];

    currentRow.push(1);

    for (let i = 0; i < previousRow.length - 1; i++) {
        const sum = previousRow[i] + previousRow[i + 1];
        currentRow.push(sum);

    }

    currentRow.push(1);

    return currentRow;
  
};
  
// Do not edit below this line
module.exports = pascal;
