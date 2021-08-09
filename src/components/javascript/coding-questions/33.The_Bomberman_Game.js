function detonate (arr, i, j) {
  arr[i][j] = '.'
  if (i - 1 >= 0) arr[i - 1][j] = '.'
  if (j - 1 >= 0) arr[i][j - 1] = '.'
  if (i + 1 < arr.length) arr[i + 1][j] = '.'
  if (j + 1 < arr[0].length) arr[i][j + 1] = '.'
}

function bomberMan (n, grid) {
  if (n === 1) return grid

  const row = grid.length
  const col = grid[0].length

  let ret = new Array(row).fill(9).map(_ => new Array(col).fill(9))

  if (!(n % 2)) return ret.map(_ => 'O'.repeat(col))

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '.' && ret[i][j] === 9) ret[i][j] = 'O'
      else if (grid[i][j] === 'O') detonate(ret, i, j)
    }
  }

  if ((n - 1) % 4 === 0) {
    grid = ret
    ret = new Array(row).fill(9).map(_ => new Array(col).fill(9))

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (grid[i][j] === '.' && ret[i][j] === 9) ret[i][j] = 'O'
        else if (grid[i][j] === 'O') detonate(ret, i, j)
      }
    }
  }
  return ret.map((r) => r.join(''))
}
