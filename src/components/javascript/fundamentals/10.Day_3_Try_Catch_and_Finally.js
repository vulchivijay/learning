function reverseString (s) {
  let r
  try {
    r = s.split('').reverse().join('')
  } catch (e) {
    console.log(e.message)
    r = s
  } finally {
    console.log(r)
  }
}
