function beautifulDays (i, j, k) {
  let count = 0
  for (let idx = i; idx <= j; idx++) {
    const reverse = +idx.toString().split('').reverse().join('')
    if ((Math.abs(idx - reverse) % k) === 0) count++
  }
  return count
}
