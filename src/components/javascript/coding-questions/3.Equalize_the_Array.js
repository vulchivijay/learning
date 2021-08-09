function equalizeArray (arr) {
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]] ? ++map[arr[i]] : 1
  }

  const maxCount = Math.max(...Object.values(map))
  return arr.length - maxCount
}
