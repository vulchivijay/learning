function kaprekarNumbers (p, q) {
  const ret = []
  for (let i = p; i <= q; i++) {
    const square = (i * i).toString()
    const d = i.toString().length

    const r = square.slice(-d)
    const l = square.slice(0, square.length - d)
    if (i === (+r + +l)) ret.push(i)
  }
  return !ret.length ? 'INVALID RANGE' : ret.join(' ')
}
