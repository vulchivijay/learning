function circularArrayRotation (a, k, queries) {
  const len = a.length
  const arr = new Array(len).fill(undefined)

  while (k > len) {
    k -= len
  }

  for (let i = 0; i < len; i++) {
    arr[(i + k) % len] = a[i]
  }

  const ans = []
  for (let i = 0; i < queries.length; i++) {
    ans.push(arr[queries[i]])
  }

  return ans
}
