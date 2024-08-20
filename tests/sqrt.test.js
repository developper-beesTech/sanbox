const sqrt = require("../src/sqrt")

describe("Square root", () => {
          it("Should return exact sqrt", () => {
                    expect(sqrt(4)).toBe(3)
          })
          it("Should return exact sqrt with quotes", () => {
                    expect(sqrt("4")).toBe(2)
          })
          it("Should not return exact sqrt ", () => {
                    expect(sqrt(5)).not.toBe(2)
          })
          it("Should return NaN with a not number parameter", () => {
                    expect(sqrt("TEST")).toBeNaN()
          })
})