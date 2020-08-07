export const AGGREGATOR_ENDPOINT = process.env.AGGREGATOR_ENDPOINT
export const TRANSACTIONS_ENDPOINT = (blockNumber) => {
  return `${AGGREGATOR_ENDPOINT}/explorer/transactions?blockNumber=${blockNumber}`
}
export const TRANSACTION_ENDPOINT = (
  blockNumber,
  depositContractAddress,
  start,
  end
) => {
  return `${AGGREGATOR_ENDPOINT}/explorer/transaction?blockNumber=${blockNumber}&depositContractAddress=${depositContractAddress}&start=${start}&end=${end}`
}
export const BLOCKS_ENDPOINT = AGGREGATOR_ENDPOINT + '/explorer/blocks'
export const DEFAULT_TRANSACTION_VALUE = {
  hash: '',
  // from: '',
  blockNumber: '',
  mainchainBlockNumber: '',
  timestamp: '',
  depositContractAddress: '',
  stateObject: '',
  range: { start: '', end: '' }
}
