function isPalindrome(word) {
  // iterate from the beginning of the word until the middle letter
  for(let startIndex = 0 ; startIndex < word.length / 2; startIndex++){
      const endIndex = word.length - 1 - startIndex;
      //compare the letter we iterate over to the corespponding letter at the end of the word
      if(word[startIndex] !== word[endIndex])
        //  if it's not equal then return false
        return false;
  }

  // if we reach the middle letter without having a mismatching then return true
  return true;
}

/* 
  iterate from the beginning of the word until the middle letter
    compare the letter we iterate over to the corespponding letter at the end of the word
      if it's not equal then return false
    
      if we reach the middle letter without having a mismatching then return true
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
