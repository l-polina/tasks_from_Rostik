const palindromes = require("../src/palindromes");

test("should show all palindromes", () => {
  expect(palindromes("Anna sgvsg anna, bob - 1987 aba!")).toStrictEqual({
    anna: 2,
    bob: 1,
    aba: 1,
  });
});
