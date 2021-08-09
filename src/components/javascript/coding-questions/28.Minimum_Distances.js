function minimumDistances (a) {
  let distance = a.length + 1
  for (let i = 0; i < a.length; i++) {
    const idx = a.indexOf(a[i], i + 1)
    if (idx > -1) distance = Math.min(distance, Math.abs(i - idx))
  }
  return a.length + 1 === distance ? -1 : distance
}
