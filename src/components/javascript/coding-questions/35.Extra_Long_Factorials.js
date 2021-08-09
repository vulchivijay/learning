function extraLongFactorials (n) {
  let ret = 1n
  n = BigInt(n)
  for (let i = n; i > 1; i -= 1n) {
    ret *= i
  }
  console.log(ret.toString())
}
