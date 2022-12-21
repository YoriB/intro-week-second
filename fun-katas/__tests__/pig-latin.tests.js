const { pigLatin } = require("../pig-latin/pig-latin");

describe("pigLatin", () => {
  test.only("returns an empty string when an empty string is passed", () => {
    //arrange
    const input = "";
    const expected = "";
    //act
    const result = pigLatin(input);
    //assert
    expect(result).toEqual(expected);
  });

  test.only("returns a vowel letter appended with the suffix way when a vowel letter is passed", () => {
    //arrange
    const input = "a";
    const expected = "away";
    //act
    const result = pigLatin(input);
    //assert
    expect(result).toEqual(expected);
  });

  test.only("returns a consonant letter appended with the suffix way when one consonant letter is passed", () => {
    //arrange
    const input = "b";
    const expected = "bway";
    //act
    const result = pigLatin(input);
    //assert
    expect(result).toEqual(expected);
  });

  test.only("passes a string and takes its first letter that is a consonant and puts at the end, then appends the suffix ay at the end ", () => {
    //arrange
    const input = "northcoders";
    const expected = "orthcodersnay";
    //act
    const result = pigLatin(input);
    //assert
    expect(result).toEqual(expected);
  });

  test.only("passes a string and takes the first number of letters that are consonant and puts them at the end, then appends the suffix ay at the end ", () => {
    //arrange
    const input = "sheffield";
    const expected = "effieldshay";
    //act
    const result = pigLatin(input);
    //assert
    expect(result).toEqual(expected);
  });

  test.only("passes a string with a vowel as its first letter then appends the suffix ay at the end with the original string unchanged ", () => {
    //arrange
    const input = "algorithm";
    const expected = "algorithmway";
    //act
    const result = pigLatin(input);
    //assert
    expect(result).toEqual(expected);
  });

  test.only("passes a string with more than one word and appends the appropriate suffix following the rules set in previous test ", () => {
    //arrange
    const input = "keep on coding";
    const expected = "eepkay onway odingcay";
    //act
    const result = pigLatin(input);
    //assert
    expect(result).toEqual(expected);
  });
});
