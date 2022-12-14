const { tillAddition } = require("../till-addition/till-addition");

describe("tillAddition", () => {
test.only("returns an empty array when an empty string is passed through ", () => {

  expect(tillAddition({})).toEqual([]);
  });
  test("returns a value inside a string when the object containing the till is passed", () => {
    expect(tillAddition({ "1p": 1, "2p": 1 })).toBe("£0.03");
    expect(tillAddition({ "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 })).toBe("£0.38");
    expect(tillAddition
      ({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 })).toBe("£1.85");
  });
});
