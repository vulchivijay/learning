function taumBday (b, w, bc, wc, z) {
  b = BigInt(b)
  w = BigInt(w)
  bc = BigInt(bc)
  wc = BigInt(wc)
  z = BigInt(z)

  if (bc > wc + z) return (b * (wc + z)) + (w * wc)
  else if (wc > bc + z) return (b * bc) + (w * (bc + z))
  else return (b * bc) + (w * wc)
}
