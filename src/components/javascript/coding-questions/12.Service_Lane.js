function serviceLane (width, cases) {
  return cases.map(([i, j]) => Math.min(...width.slice(i, j + 1)))
}
