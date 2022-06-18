function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord= word.split("").reverse().join("");
  return word === reversedWord ? true :false;
}
console.log(isPalindrome('madam'))

/* 
  Add your pseudocode here
//my function tekes the word 
//turn the word into an array,reverses the array and converts it back to a string (z)
//the new string is stored in a new variable reverseWord
//finally using a ternary operator compares word to reverseWord to give true or false 

/*
  Add written explanation of your solution here
my function tekes the word 
turn the word into an array,reverses the array and converts it back to a string (z)
the new string is stored in a new variable reverseWord
finally using a ternary operator compares word to reverseWord to give true or false 

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
