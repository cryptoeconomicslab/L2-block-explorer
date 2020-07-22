export const AGGREGATOR_ENDPOINT = process.env.AGGREGATOR_ENDPOINT
export const TRANSACTIONS_ENDPOINT = (blockNumber) => {
  return (
    AGGREGATOR_ENDPOINT + '/explorer/transactions?blockNumber=' + blockNumber
  )
}
export const BLOCKS_ENDPOINT = AGGREGATOR_ENDPOINT + '/explorer/blocks'
