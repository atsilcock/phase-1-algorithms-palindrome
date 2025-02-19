function reverse(word) {
  // const wordArray = word.split("")
  // const reversedWordArray = wordArray.reverse()
  // const reversedWord = reversedWordArray.join("")
  // return reversedWord;
  return word.split("").reverse().join("")
}

function isPalindrome(word) { 
  const reversedWord = reverse(word);
  return word === reversedWord

 }

/* 
  Return True
*/

/*
The goal here is to determine if the string provided is a palindrome - where a word should read the same backwards and forwards. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
