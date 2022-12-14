const { dnaPairs } = require("../dna-pairs/dna-pairs");

describe("dnaPairs", () => {
  test("returns an empty string when an empty string is passed", () => {
    //arrange
    const input = "";
    const expected = [];
    //act
    const result = dnaPairs(input);
    //assert
    expect(result).toEqual(expected);
  });


 test("creates a function that takes a string of DNA and returns it and its opposite strand in an array", () => {
    //arrange
    const input1 = "G";
    const expected1 = [["G", "C"]];
    //act
    const result1 = dnaPairs(input1);
    //assert
    expect(result1).toEqual(expected1);

    //arrange
    const input2 = "AG";
    const expected2 = [
      ["A", "T"],
      ["G", "C"],
    ];
    //act
    const result2 = dnaPairs(input2);
    //assert
    expect(result2).toEqual(expected2);

    const input3 = "ATAG";
    const expected3 = [
      ["A", "T"],
      ["T", "A"],
      ["A", "T"],
      ["G", "C"],
    ];
    //act
    const result3 = dnaPairs(input3);
    //assert
    expect(result3).toEqual(expected3);
  });
});
//
//