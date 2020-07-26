const palindrome = require("../src/palindrome");

test("should return true if string is palindrome", () => {
  expect(palindrome("abcba")).toBe(true);
});

test("should return false if string isn't palindrome", () => {
  expect(palindrome("abcdba")).toBe(false);
});
