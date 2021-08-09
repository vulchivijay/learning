function dayOfProgrammer (year) {
  if (year === 1918) return `26.09.${year}`

  let isLeap
  if (year >= 1700 && year <= 1917) isLeap = year % 4 === 0
  else isLeap = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)
  return isLeap ? `12.09.${year}` : `13.09.${year}`
}
