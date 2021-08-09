function gridSearch (G, P) {
  const r = G.length
  const c = G[0].length
  const gr = P.length
  const gc = P[0].length

  const grid = (i, j) => {
    let head = 0
    let pi = 0
    let pj = 0
    let di = i
    let dj = j

    while (head < gr * gc) {
      if (G[di][dj] === P[pi][pj]) {
        if (!P[pi][pj + 1]) {
          pi++
          pj = 0
          di++
          dj = j
        } else {
          pj++
          dj++
        }
      } else {
        return false
      }

      head++
    }
    return true
  }

  for (let i = 0; i <= r - gr; i++) {
    for (let j = 0; j <= c - gc; j++) {
      if (G[i][j] === P[0][0]) {
        if (grid(i, j)) return 'YES'
      }
    }
  }
  return 'NO'
}
