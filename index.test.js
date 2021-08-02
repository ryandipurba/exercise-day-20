const index = require("./index");

test("testCountbmi", () => {
  expect(index.Countbmi(50, 1.7)).toEqual("17.3");
  expect(index.Countbmi(60, 1.7)).toEqual("20.8");
  expect(index.Countbmi(75, 1.7)).toEqual("26.0");
  expect(index.Countbmi(90, 1.7)).toEqual("31.1");
})