function repeatedString (s, n) {
  if (s.length === 1) return (s !== 'a') ? 0 : n

  let count = 0
  const len = s.length

  for (let i = 0; i < len; i++) {
    if (s.charAt(i) === 'a') count++
  }

  count *= parseInt(n / len)

  for (let i = 0; i < (n % len); i++) {
    if (s.charAt(i) === 'a') count++
  }

  return count
}
