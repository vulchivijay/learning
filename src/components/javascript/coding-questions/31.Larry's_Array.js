function larrysArray (A) {
  let count = 0
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) {
        count++
      }
    }
  }
  return count % 2 === 0 ? 'YES' : 'NO'
}
