// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {

  //  If decoding (encode === false), string needs an even number of numbers
  if (encode === false)  {
      let numberOfNumbers = 0;
  
      //  newInput is the input string without spaces
      let newInput = input;
      while (newInput.includes(" "))  {
        newInput = newInput.replace(" ", "")
      }
  
      //  Need pairs of all numbers in this string
      const decode = newInput.split("").every((number) => 
      ((number.charCodeAt() >= 48) && (number.charCodeAt() <= 57)))
      if (!decode) return false;
  
      //  Length of string should be an even number: pairs of numbers
      numberOfNumbers = newInput.length;
     
      //  Need an even number of numbers for this to work
      if ((numberOfNumbers & 1) === 1) return false;
  }
  
  //  polybiusArray codes each letter with a special two-digit number
  let polybiusArray = 
  [
    { letter: 'a', number: '11' },
    { letter: 'b', number: '21' },
    { letter: 'c', number: '31' },
    { letter: 'd', number: '41' },
    { letter: 'e', number: '51' },
    { letter: 'f', number: '12' },
    { letter: 'g', number: '22' },
    { letter: 'h', number: '32' },
    { letter: 'i', number: '42' },
    { letter: 'j', number: '42' },
    { letter: 'k', number: '52' },
    { letter: 'l', number: '13' },
    { letter: 'm', number: '23' },
    { letter: 'n', number: '33' },
    { letter: 'o', number: '43' },
    { letter: 'p', number: '53' },
    { letter: 'q', number: '14' },
    { letter: 'r', number: '24' },
    { letter: 's', number: '34' },
    { letter: 't', number: '44' },
    { letter: 'u', number: '54' },
    { letter: 'v', number: '15' },
    { letter: 'w', number: '25' },
    { letter: 'x', number: '35' },
    { letter: 'y', number: '45' },
    { letter: 'z', number: '55' }
  ]
  
  
    //  Begin parsing input string to encode or decode
    let lowerString = "";
    lowerString = input.toLowerCase();        //  input string to lower case
  
    let stringArray = lowerString.split("");  //  Split lowerString into array
  
    let newString = "";                       //  Output string returned
  
    //  Next several variables only used to decode numbers to letters
    thisChar = "";      //  Current value of stringArray[i], a single character
    nextChar = "";      //  Next value of the array: stringArray[i + 1]
    thisCode = "";      //  Two digit code:  thisChar + nextChar
    decodeLetter = "";  //  polybiusArray.letter value
    thisIndex = 0;      //  Current index value of stringArray[i]
    nextIndex = 0;      //  Next index value of the array: [i + 1]      
    nextCode = 0;       //  Next array index number to form two-digit code
  
  
    //  Begin forEach character in stringArray:  both encode and decode
    stringArray.forEach((character, index) => { 
      // console.log(character);  
  
      if (encode === true)   //  Begin encode letters to numbers 
      {
      if ((character.charCodeAt() >= 97) && (character.charCodeAt() <= 122))  {    
        // console.log(character);
        let characterMatch = polybiusArray.find((match) => match.letter === character);
        newString += characterMatch.number;
        // console.log(characterMatch);
      }
      //  else not a number or letter
      else newString += character;
      }				//  End encode letters to numbers
      
      
      else if (encode === false)    //  Begin decode numbers to letters 
      {
      thisIndex = index;
      nextIndex = index + 1;
      // nextCode = index + 2;
      thisChar = character;
      nextChar = stringArray[nextIndex];
      if(!nextChar) nextChar = "";     // Last element of the array won't have a next
  
      //  Begin mega-if:  each character, and next character form a pair of numbers
      if (((thisChar.charCodeAt() >= 49) && (thisChar.charCodeAt() <= 53)) &&    
          ((nextChar.charCodeAt() >= 49) && (nextChar.charCodeAt() <= 53)) && 
          (index === nextCode))  {    
        // console.log(character);
        thisCode = thisChar + nextChar;
        // console.log(thisCode + "     " + thisChar + "  " + thisIndex + "  " + nextCode);
        nextCode = thisIndex + 2;
  
        let numberMatch = polybiusArray.find((match) => match.number === thisCode);
        decodeLetter = numberMatch.letter;
        //  When decoding, it translates 42 to (i/j)
        if (numberMatch.number == 42) { decodeLetter = "(i/j)"; }
        // console.log(decodeLetter);
  
        newString += decodeLetter;
  
      }   //  End mega-if
      else {    //  else the second character isn't a number 
      // console.log("other: " + character + "  " + thisIndex + "  " + nextCode);
        if (index === nextCode)  { //  Skip to next line to check code
            nextCode++;   
            newString += character;
        }
      }  //  End else the second character isn't a number 
      }  //  End decode numbers to letters 
    });	 //  End forEach character in stringArray

    return newString;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
