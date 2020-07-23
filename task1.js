function searchPalindrome(str1, str2) {
  return str1 === str2.split("").reverse().join("");
}

console.log(searchPalindrome("aba", "aba"));
