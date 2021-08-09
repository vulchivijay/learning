function getSecondLargest (nums) {
  // Complete the function
  const arr = [...new Set(nums)]
  return arr.sort((a, b) => b - a)[1]
}
