/**
 * 345: Reverse Vowels of a String
 * 
 * Problem statement:
 * 
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower 
 * and upper cases, more than once.
 * 
 * 
 * Example 1:
 * Input: s = 'hello
 * Output: 'holle'
 * 
 * Example 2:
 * Input: s = 'leetcode'
 * Output: 'leotcede'
 */

const reverseVowels = str => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let strVowels = [];
  for (s of str) {
    if (vowels.includes(s)) {
      strVowels.push(s)
    }
  }

  let newStr = [...str];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      newStr[i] = strVowels.pop();
    }
  }
  return newStr.join('')
}

let input = 'leetcode'
let output = reverseVowels(input)
console.log(output) // leotcede