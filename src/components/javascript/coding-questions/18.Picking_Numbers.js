function pickingNumbers (a) {
  let count = 0

  const tmp = [...new Set(a)]
  const countInArr = (arr, num) => arr.reduce((cnt, v) => (v === num) ? cnt + 1 : cnt, 0)

  for (let i = 0; i < tmp.length; i++) {
    const curValCnt = countInArr(a, tmp[i])
    const nextValCnt = countInArr(a, tmp[i] + 1)

    count = Math.max(count, curValCnt + nextValCnt)
  }

  return count
}
