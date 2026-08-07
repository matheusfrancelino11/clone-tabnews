const calculator = require("../models/calculator.js");

test("sum 2+2 should return 4", () => {
  const result = calculator.sum(2, 2);
  expect(result).toBe(4);
});
