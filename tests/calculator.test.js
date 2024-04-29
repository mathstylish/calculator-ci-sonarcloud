const { sum, subtract, divide, times, pow } = require("../src/calculator");

describe("Calculator operations", () => {
  it("add 1 + 2 to be equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("subtract 17 - 5 to be equal 12", () => {
    expect(subtract(17, 5)).toBe(12);
  });

  it("divide 21 / 3 to be equal 7", () => {
    expect(divide(21, 3)).toBe(7);
  });

  it("times 15 * 3 to be equal 45", () => {
    expect(times(15, 3)).toBe(45);
  });

  it("pow 2^8 to be equal 256", () => {
    expect(pow(2, 8)).toBe(256);
  });
});
