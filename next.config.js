const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  env: {
    AGGREGATOR_ENDPOINT: process.env.AGGREGATOR_ENDPOINT,
    MAINCHAIN_BLOCK_EXPLORER_URL: process.env.MAINCHAIN_BLOCK_EXPLORER_URL
  }
}
