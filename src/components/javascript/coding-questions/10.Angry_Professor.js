function angryProfessor (k, a) {
  let student = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) student++
  }

  return k > student ? 'YES' : 'NO'
}
