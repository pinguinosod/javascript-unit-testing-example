const { sum } = require('../src/simple-functions');

describe("sum", function() {
  it("should sum 2 and 3", function() {
    expect(sum(2, 3)).toBe(5);
  });
});