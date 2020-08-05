function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function splitIntoWords(text) {
  return text.split(/[^a-zA-Z]/).filter((str) => str.length > 1);
}

function findPalindromes(text) {
  let array = splitIntoWords(text).map((item) => item.toLowerCase());
  return array.filter((item) => isPalindrome(item));
}

function countPalindromes(text) {
  let objectPalindromes = findPalindromes(text).reduce((result, current) => {
    result[current] = (result[current] || 0) + 1;
    return result;
  }, {});

  return objectPalindromes;
}

module.exports = countPalindromes;
