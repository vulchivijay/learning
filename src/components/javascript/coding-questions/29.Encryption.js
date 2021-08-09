function encryption (s) {
  let rows = Math.round(Math.sqrt(s.length))
  const column = Math.ceil(Math.sqrt(s.length))
  if (rows * column < s.length) rows += 1
  let ret = ''

  for (let i = 0; i < column; i++) {
    for (let j = 0; j < s.length; j += column) {
      ret += s[j + i] || ''
    }
    ret += ' '
  }
  return ret
}
