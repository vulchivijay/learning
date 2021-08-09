function jumpingOnClouds (c) {
  let count = 0

  for (let i = 0; i < c.length - 1; count++) {
    i += (c[i] === 0) ? 2 : 1
  }

  return count
}
