const permutations = function(arr) {

    if (arr.length === 0) {
        return [[]];
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const permutationsOfRemaining = permutations(remaining);

        for (let j = 0; j < permutationsOfRemaining.length; j++) {
            const currentPermutation = permutationsOfRemaining[j];
            const newPermutation = [currentElement].concat(currentPermutation);
            result.push(newPermutation);
        }


    }

    return result;
  
};
  
// Do not edit below this line
module.exports = permutations;
