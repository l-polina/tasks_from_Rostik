function makesListOfStrings(text) {
  return text.split(/[^a-zA-Z]/).filter((str) => str.length != 0);
}

function sortsString(text) {
  return makesListOfStrings(text).map((item) =>
    item.split("").sort().join("").toLowerCase()
  );
}

function findsAndCountsAnagrams(text) {
  let objectAnagrams = sortsString(text).reduce((result, current) => {
    result[current] = (result[current] || 0) + 1;
    return result;
  }, {});

  return objectAnagrams;
}

console.log(findsAndCountsAnagrams("Abc cba abdc cdba g1ht, 1999 - hello!"));
