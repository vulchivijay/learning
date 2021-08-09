function cutTheSticks (arr) {
  const ret = []
  const sort = arr.sort((a, b) => a - b)
  sort.forEach((v) => {
    ret.push(sort.filter(s => s >= v).length)
  })

  return [...new Set(ret)]
}
