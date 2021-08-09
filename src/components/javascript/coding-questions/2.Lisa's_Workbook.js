function workbook (n, k, arr) {
  let page = 0
  let count = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < arr[i]; j++) {
      if (j % k === 0) page++
      if (page === (j + 1)) count++
    }
  }
  return count
}
