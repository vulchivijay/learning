function stones (n, a, b) {
  const len = n - 1
  const numSet = new Set()
  for (let i = 0; i <= len; i++) {
    const j = len - i
    numSet.add((a * i) + (b * j))
  }

  return [...numSet].sort((a, b) => a - b)
}
