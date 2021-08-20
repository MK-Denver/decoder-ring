// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  
  function caesar(input, shift, encode = true) {
	if ((shift === 0) || (shift < -25) || (shift > 25) || (!shift))
		return false;
    
	let array = input.split("");	//  Split input into array
	let newArray = [];		//  New array for output string
	let newString = "";		//  New output string

    //  "should allow for a negative shift that will shift to the left"
    //  When decoding (!encode), change shift value to be negative
    if (!encode) shift = - shift;

    
    for (i = 0;  i < array.length;  i++)  {
  		let char = array[i];		//  Each character of the string, now as array elements
  		char = char.toLowerCase();	//  Ignoring case in this exercise

  		let newChar = char;		//  New value of the character, after shift
  		//  65 - 90  [ A - Z ]  97 - 122  [ a - z ]
  		let letterCode = newChar.charCodeAt();	//  Code value of the character

  		//  Apply the shift, only to letters
  		if ((letterCode >= 97) && (letterCode <= 122))  {

			//  Shift the letter code if shift is negative
                  if (shift < 0)  // && (!encode))
                {
				if (letterCode + shift < 97)  {
    					//  Wrap the shift to the beginning of the alphabet
					letterCode = (letterCode + shift) + 26;
				}
				else  { letterCode = letterCode + shift;  }
      			}
			//  Shift the letter code if shift is positive
      			else  {  //  (shift > 0)
				if (letterCode + shift > 122)  {
    					//  Wrap the shift to the beginning of the alphabet
					letterCode = (letterCode + shift) - 26;
				}
				else  { letterCode = letterCode + shift;  }
      			}

			//  De-code the shifted letter
			newChar = String.fromCharCode(letterCode);

		 }	//  End: apply the shift, only to letters

		//  Build new array for output string
		newArray.push(newChar);

	}	//  End: for loop

	newString = newArray.join("");
	return newString;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
