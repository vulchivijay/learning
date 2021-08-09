function migratoryBirds (arr) {
  const store = new Array(5).fill(0)

  for (let i = 0; i < arr.length; i++) store[arr[i] - 1]++

  const max = Math.max(...store)
  const type = store.findIndex(s => s === max)
  return type + 1
}
