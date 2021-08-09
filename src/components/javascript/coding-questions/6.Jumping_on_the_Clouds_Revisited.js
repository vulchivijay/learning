function jumpingOnClouds (c, k) {
  let energy = 100

  let i = 0
  do {
    i += k
    if (i > (c.length - 1)) i -= c.length

    energy -= 1
    if (c[i] !== 0) energy -= 2
  } while (i % c.length !== 0)

  return energy
}
