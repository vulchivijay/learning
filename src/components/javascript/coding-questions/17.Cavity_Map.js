function cavityMap (grid) {
  const len = grid.length
  const dup = [...grid]

  for (let i = 1; i < len - 1; i++) {
    const tmp = dup[i].split('')
    for (let j = 1; j < tmp.length - 1; j++) {
      const v = tmp[j]
      if (v > grid[i - 1][j] && v > grid[i + 1][j] && v > grid[i][j - 1] && v > grid[i][j + 1]) {
        tmp[j] = 'X'
      }
      dup[i] = tmp.join('')
    }
  }
  return dup
}
