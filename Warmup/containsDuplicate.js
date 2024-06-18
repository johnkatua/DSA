/**
 * 217: Contains Duplicate
 * 
 * Problem Statement:
 * Given an integer array nums, return true if any value appears at 
 * least twice in the array, and return false if every element is distinct.
 * 
 * Example 1:
 * Input: nums = [1, 2, 3, 1]
 * Output: true
 * 
 * Example 2:
 * Input: nums = [1, 2, 3, 4]
 * Output: false
 * 
 * Approach:
 * Remove all the duplicates from the existing array if they are any.
 * Compare the length of the given arr with the length of the new array with no duplicates.
 * If the length do not match then the original array had duplicates,
 * else the original had no duplicates
 */


const containsDuplicate = nums => {
  const newArr = [...new Set(nums)]
  return nums.length !== newArr.length
}
