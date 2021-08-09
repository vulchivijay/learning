function absolutePermutation (n, k) {
  const ret = []
  if (k === 0) {
    for (let i = 1; i <= n; i++) {
      ret.push(i)
    }
    return ret
  } else if ((n / k) % 2 !== 0) {
    return [-1]
  }

  let add = true
  for (let i = 1; i <= n; i++) {
    if (add) ret.push(i + k)
    else ret.push(i - k)

    if (i % k === 0) add = !add
  }
  return ret
}
