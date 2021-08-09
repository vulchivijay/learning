function getTotalX (a, b) {
  // Write your code here
  const g = gcd(...b)
  const l = lcm(...a)
  let count = 0

  for (let i = l, j = 2; i <= g; i = l * j, j++) {
    if (g % i == 0) count++
  }
  return count
}
