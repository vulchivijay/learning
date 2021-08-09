function getMoneySpent (keyboards, drives, b) {
  let price = -1
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const sum = keyboards[i] + drives[j]
      if (sum <= b && sum > price) price = sum
    }
  }

  return price
}
