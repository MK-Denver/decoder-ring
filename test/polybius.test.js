// Write your tests here!
const { expect } = require("chai");
const { polybius  } = require("../src/polybius");


describe("polybius", () => {
  it("should return output string as a string", () => {

    const input = "thinkful";
    const actual = polybius (input, encode = false);

    expect(actual).to.be.a.string;
  });
//  it("should encode a string of letters and decode a string of numbers based on the polybius square design", () => {
  it("should encode a string of letters based on the polybius square design", () => {

    const input = "message";
    const actual = polybius (input);

    const expected = "23513434112251";
    expect(actual).to.equal(expected);
  });
  it("should decode a string of numbers based on the polybius square design", () => {

    const input = "531323435233215432154522314412352441555134251114";
    const actual = polybius (input, encode = false);

    const expected = "plmoknbuhvygctfxrdzeswaq";
    expect(actual).to.equal(expected);
  });
  it("should return false when decoding if the length of a string of numbers excluding spaces isn't even", () => {

    const input = "111 23513434112251 44321144 321134 11 134344 4312 345311315134";
    const actual = polybius (input, encode = false);

    expect(actual).to.be.false;
  });
//  it("should maintains spaces in the message, before and after encoding or decoding", () => {
  it("should maintains spaces in the message, before and after encoding", () => {

    const input = "a message that has a lot of spaces";
    const actual = polybius (input);

    const expected = "11 23513434112251 44321144 321134 11 134344 4312 345311315134";
    expect(actual).to.equal(expected);
  });
  it("should maintains spaces in the message, before and after decoding", () => {

    const input = "11 23513434112251 44321144 321134 11 134344 4312 345311315134";
    const actual = polybius (input, encode = false);

    const expected = "a message that has a lot of spaces";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {

    let input = "A Message";
    const actual = polybius (input);

    input = "a message";
    const expected = polybius (input);

    expect(actual).to.equal(expected);
  });  
  it("should translate the letters i and j to 42 when encoding", () => {

    const input = "iijiijiij jjijjijji";
    const actual = polybius (input);

    const expected = "424242424242424242 424242424242424242";
    expect(actual).to.equal(expected);
  });
  it("should translate 42 to (i/j) when decoding", () => {

  const input = "424242424242424242 424242424242424242";
  const actual = polybius (input, encode = false);

  const expected = "(i/j)(i/j)(i/j)(i/j)(i/j)(i/j)(i/j)(i/j)(i/j) (i/j)(i/j)(i/j)(i/j)(i/j)(i/j)(i/j)(i/j)(i/j)";
  expect(actual).to.equal(expected);
  });
});

