const { sum, subtract } = require('../src/simple-functions');

describe("sum", function() {
  it("should sum 2 and 3", function() {
    expect(sum(2, 3)).toBe(5);
  });

  it("should sum 3 and 2", function() {
    expect(sum(3, 2)).toBe(5);
  });
});

describe("subtract", function() {
  it("should subtract 3 from 5", function() {
    expect(subtract(5, 3)).toBe(2);
  });
});
