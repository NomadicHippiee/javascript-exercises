function palindromes(text) {
  // 1. Normalize: lowercase everything
  let cleaned = text.toLowerCase();

  // 2. Remove all non-alphanumeric characters (punctuation, spaces)
  cleaned = cleaned.replace(/[^a-z0-9]/g, '');

  // 3. Reverse the cleaned string
  let reversed = cleaned.split('').reverse().join('');

  // 4. Compare original cleaned string with reversed
  return cleaned === reversed;
}


// Do not edit below this line
module.exports = palindromes;
