function utopianTree (n) {
  let height = 1
  if (n === 0) return height

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) height *= 2
    else height += 1
  }
  return height
}
