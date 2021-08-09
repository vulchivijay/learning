function findDigits (n) {
  return Array.from(String(n)).filter(num => n % num === 0).length
}
