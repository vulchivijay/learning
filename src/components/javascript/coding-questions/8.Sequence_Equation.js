function permutationEquation (p) {
  const arr = []
  for (let i = 1; i <= p.length; i++) {
    const index = p.indexOf(i) + 1
    arr.push(p.indexOf(index) + 1)
  }
  return arr
}
