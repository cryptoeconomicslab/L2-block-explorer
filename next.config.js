const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  env: {
    AGGREGATOR_ENDPOINT: process.env.AGGREGATOR_ENDPOINT
  }
}
