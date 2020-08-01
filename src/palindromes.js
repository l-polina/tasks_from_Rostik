function makesListOfStrings(text) {
  return text.split(/[^a-zA-Z]/).filter((str) => str.length != 0);
}

function findsPalindromes(text) {
  let array = makesListOfStrings(text).map((item) => item.toLowerCase());
  return array.filter((item) => item === item.split("").reverse().join(""));
}

function countsPalindromes(text) {
  let objectPalindromes = findsPalindromes(text).reduce((result, current) => {
    result[current] = (result[current] || 0) + 1;
    return result;
  }, {});

  return objectPalindromes;
}

module.exports = countsPalindromes;
