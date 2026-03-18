const contains = function(obj, value) {
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const currentValue = obj[key];

    if (Object.is(currentValue, value)) {
        return true;
    }

    if (typeof currentValue === 'object' && currentValue !== null) {
        if (contains(currentValue, value)) {
            return true;
        }
    }

  }
  return false;
};
  
// Do not edit below this line
module.exports = contains;
