function countingValleys (n, s) {
  let hike = 0
  let count = 0
  for (let i = 0; i < n; i++) {
    if (s[i] === 'U') hike++
    else if (s[i] === 'D') hike--

    if (s[i] === 'U' && hike === 0) count++
  }
  return count
}
