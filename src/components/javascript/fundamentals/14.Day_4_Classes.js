class Polygon {
  constructor (args) {
    this.info = args
  }

  perimeter () {
    return this.info.reduce((sum, v) => sum + v, 0)
  }
}
