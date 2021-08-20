// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");



describe("caesar", () => {
  it("should shift each letter of the input string a given number of letters in the alphabet", () => {

    const input = "Zebra Magazine";
    const shift = 3;

    const actual = caesar (input, shift);
    const expected = "cheud pdjdclqh";
    expect(actual).to.equal(expected);
  });
//  it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
  it("should return false if the shift value is equal to 0", () => {

    const input = "Zebra Magazine";
    const shift = 0;

    const actual = caesar (input, shift);
    expect(actual).to.be.false;
  });
  it("should return false if the shift value less than -25", () => {

    const input = "Zebra Magazine";
    const shift = -26;

    const actual = caesar (input, shift);
    expect(actual).to.be.false;
  });
  it("should return false if the shift value is greater than 25", () => {

    const input = "Zebra Magazine";
    const shift = 26;

    const actual = caesar (input, shift);
    expect(actual).to.be.false;
  });
  it("should return false if the shift value is not present", () => {

    const input = "Zebra Magazine";
    const shift = null;

    const actual = caesar (input, shift);
    expect(actual).to.be.false;
  });
  it("should ignore capital letters", () => {

    let input = "A Message";
    const shift = 3;
    const actual = caesar (input, shift);

    input = "a message";
    const expected = caesar (input, shift);

    expect(actual).to.equal(expected);
  });
  it("should handle shifts that go past the end of the alphabet", () => {

    const input = "xyz";
    const shift = 3;
    const actual = caesar (input, shift);

    const expected = "abc";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and other nonalphabetic symbols in the message, before and after encoding or decoding", () => {

    const input = "abcdefgh--  []^_`$  **vwxyz";
    const shift = 3;
    const encode = false;
    const actual = caesar (input, shift, encode);

    const expected = "xyzabcde--  []^_`$  **stuvw";
    expect(actual).to.equal(expected);
  });
});

