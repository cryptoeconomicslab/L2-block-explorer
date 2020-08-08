const ethers = require('ethers')
const BigNumber = ethers.BigNumber

export function formatDateTime(timestamp) {
  return new Date(timestamp * 1000).toLocaleString()
}

export function formatAmount(range) {
  const start = BigNumber.from(range.start)
  const end = BigNumber.from(range.end)
  return ethers.utils.formatEther(end.sub(start))
}
