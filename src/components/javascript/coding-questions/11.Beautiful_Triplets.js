function beautifulTriplets (d, arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    const j = arr.indexOf(arr[i] + d)
    const k = arr.indexOf(arr[i] + (d * 2))
    if (j > -1 && k > -1) count++
  }
  return count
}
