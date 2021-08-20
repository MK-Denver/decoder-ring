// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
  //  Return false if the input alphabet isn't 26 characters.
	if ((!alphabet) || (alphabet.length !== 26)) return false;

  //  Translate UPPERCASE letters to lowercase.
  input = input.toLowerCase();
  alphabet = alphabet.toLowerCase();

  let alphabetArray = alphabet.split("");    //  Split alphabet into array


  //  Begin absurdly long code to check for duplicate letters!
  let alphabetArraySort = alphabet.split("");
  //  Search for duplicate letters [ return false ] 
  //  will be easier if they are consecutive
  alphabetArraySort.sort((a, b) => a.charCodeAt() - b.charCodeAt());

  let isDuplicate = false;
  alphabetArraySort.forEach((duplicate, index) => {
    if ((index > 0) && (alphabetArraySort[index] == alphabetArraySort[index - 1])) 
    isDuplicate = true;
  });

  if (isDuplicate) return false;
  //  End absurdly long code to check for duplicate letters!


  //  Begin building newSubArray from alphabetArray
  //  Declare a string of normal alphabet characters, in order
  let alphabetJoinSort = "abcdefghijklmnopqrstuvwxyz";
  //  newSubArray is the array that matches input alphabet with alphabetJoinSort
  //  [ { letter: 'a', match: 'p' }, { letter: 'b', match: 'l' }, ... ]
  let newSubArray = [];

  //  alphabetArray.forEach((match, index, collection) => {
  alphabetArray.forEach((match, index) => {

    let letterMatch = {};
    letter = `${alphabetJoinSort[index]}`;
    letterMatch["letter"] = letter;
    letterMatch["match"] = `${match}`;

    newSubArray.push(letterMatch);
  });
  //  console.log(newSubArray);
  //  End building newSubArray from alphabetArray


  //  Begin building output string using letter pairs decoded from newSubArray
  let subArray = input.split("");   //  Split string into array
  let newString = "";               //  Output string returned

  subArray.forEach((character) => {
    let letterMatch = "";

    if (encode === true)  {   //  Encode (unscrambled to scrambled)
      letterMatch = newSubArray.find((match) => match.letter === character);
      if (letterMatch) newString += letterMatch.match;
      else newString += character;
    }  else  {                //  Decode (scrambled to unscrambled)
      letterMatch = newSubArray.find((match) => match.match === character);
      if (letterMatch) newString += letterMatch.letter;
      else newString += character;
    }
  });
  //  End building output string using letter pairs decoded from newSubArray

  return newString;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
