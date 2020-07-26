const anagram = require("../src/anagram");

test("should return true if strings are anagram", () => {
  expect(anagram("abcd", "dbca")).toBe(true);
});

test("should return false if strings aren't anagram", () => {
  expect(anagram("abcd", "dbcc")).toBe(false);
});
