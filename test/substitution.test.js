// Write your tests here!
const { expect } = require("chai");
const {  substitution  } = require("../src/substitution");


describe("substitution", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {

    const input = "Zebra Magazine";
    const alphabet = "plmoknijbuhvygctfxrdzeswaqabcdefg"

    const actual = substitution (input, alphabet);
    expect(actual).to.be.false;
  });
  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {

    const input = "message";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
    const actual = substitution (input, alphabet);

    const expected = "y&ii$r&";
    expect(actual).to.equal(expected);
  });
  it("should return false if there are any duplicate characters in the given alphabet", () => {

    const input = "Zebra Magazine";
    const alphabet = "plmoknxxxxxxxxxxxxrdzeswaq";

    const actual = substitution (input, alphabet);
    expect(actual).to.be.false;
  });
//  it("should maintain spaces in the message, before and after encoding or decoding", () => {
  it("should maintain spaces in the message, before and after encoding", () => {

    const input = "a message that has a lot of spaces";
    const alphabet = "plmoknijbuhvygctfxrdzeswaq"
    const actual = substitution (input, alphabet);

    const expected = "p ykrrpik djpd jpr p vcd cn rtpmkr";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces in the message, before and after decoding", () => {

    input = "ykrrpikr ykrrpikr ykrrpikr";
    const alphabet = "pbcdkfihgjelynoaqsrtuvwxmz";
    const actual = substitution (input, alphabet, encode = false);

    const expected = "messages messages messages";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {

    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    let input = "A Message";
    const actual = substitution (input, alphabet);

    input = "a message";
    const expected = substitution (input, alphabet);

    expect(actual).to.equal(expected);
  }); 
});





