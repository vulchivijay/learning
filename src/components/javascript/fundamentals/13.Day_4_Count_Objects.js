function getCount (objects) {
  return objects.reduce((sum, { x, y }) => {
    return x === y ? ++sum : sum
  }, 0)
}
