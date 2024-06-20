/**
 * 125: Valid Palindrome
 * 
 * Problem statement:
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase 
 * letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
 * Alphanumeric characters include letters and numbers.
 * 
 * 
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

const validPalindrome = s => {
  const newStr = s.toLowerCase().replace(/\W/g, '')
  let i = 0, j = newStr.length - 1;
  while (i < j) {
    if (newStr[i] !== newStr[j]) {
      return false
    }
    i++;
    j--;
  }
  return true;
}

let input = 'A man, a plan, a canal: Panama';
let output = validPalindrome(input)
console.log(output)