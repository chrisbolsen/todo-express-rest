var grade = require("../lib/Models/grade");
 
describe("calculate", function () {
  it("should multiply 2 and 3", function () {
    var product = grade.calculate(2, 3);
    expect(product).toBe(6);
  });
});    