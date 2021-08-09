function chocolateFeast (n, c, m) {
  let totalChocolateCount = parseInt(n / c)

  for (let countOfWrapper = totalChocolateCount; countOfWrapper >= m; countOfWrapper -= m) {
    totalChocolateCount++
    countOfWrapper++
  }

  return totalChocolateCount
}
