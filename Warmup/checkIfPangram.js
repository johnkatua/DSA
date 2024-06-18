/**
 * 1832: Check if the sentence is pangram
 * 
 * Problem Statement:
 * 
 * A pangram is a sentence where every letter of the English alphabet appears at least once.
 * 
 * Given a string sentence containing only lowercase English letters, return true if sentence 
 * is a pangram, or false otherwise.
 * 
 * Example 1:
 * Input: sentence = 'thequickbrownfoxjumpsoverthelazydog'
 * Output: true
 * 
 * 
 * Example 2:
 * Input: sentence = 'leetcode'
 * Output: false
 * 
 */


/**
 * 
 * @param {*} sentence 
 * @returns 
 * 
 * Approach 1:
 * Check the length of the sentence if it is less than 26 return false
 * Else, remove all the duplicates from the sentence and compare each char
 * with the alphabet chars, if any of the char do not match return false
 * else return true
 */

const checkIfPangram = sentence => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let sortedSentence = [...new Set(sentence.split('').sort())];
  let sortedAlphabet = alphabet.split('').sort();
  if (sentence.length < 26) return false
  for (let i = 0; i < sortedSentence.length; i++) {
    if (sortedAlphabet[i] !== sortedSentence[i]) {
      return false
    }
  }
  return true
}

/**
 * 
 * @param {*} sentence 
 * @returns 
 * 
 * Approach 2:
 * Create a set of all alphabet letters
 * Loop through every character in the sentence and delete it from the alphabet set
 * Check if alphabet set size is zero
 */

const checkIfPangram2 = sentence => {
  let alphabet = new Set('abcdefghijklmnopqrstuvwxyz')

  for (let char of sentence) {
    alphabet.delete(char)
  }

  return alphabet.size === 0
}
