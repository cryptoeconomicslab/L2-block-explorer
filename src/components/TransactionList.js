import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { TRANSACTIONS_ENDPOINT } from '../const'
import { formatDateTime, formatAmount } from '../utils'

const TransactionList = ({ blockNumber }) => {
  const [transactions, setTransactions] = useState([])
  const [isFetched, setIsFetched] = useState(false)

  useEffect(() => {
    if (isFetched || blockNumber === undefined) return
    axios
      .get(TRANSACTIONS_ENDPOINT(blockNumber))
      .then((res) => {
        setTransactions(res.data)
        setIsFetched(true)
      })
      .catch((err) => {
        console.error(err)
      })
  })
  return (
    <div>
      {transactions.map((transaction, i) => {
        return (
          <Link
            href={`/transaction?blockNumber=${transaction.blockNumber}&depositContractAddress=${transaction.depositContractAddress}&start=${transaction.range.start}&end=${transaction.range.end}`}
            key={transaction.hash}
          >
            <div className="tx">
              <div className="index">{i}</div>
              <div className="time-stamp">
                {formatDateTime(transaction.timestamp)}
              </div>
              <div className="amount">{formatAmount(transaction.range)}</div>
              <div className="sender">{transaction.from}</div>
              <div className="recipient">{transaction.stateObject.address}</div>
            </div>
          </Link>
        )
      })}
      <style jsx>{`
        .tx {
          display: flex;
          flex-basis: 45%;
          padding: 0 1rem;
          color: inherit;
          text-decoration: none;
          border: 2px solid #eaeaea;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .tx:hover,
        .tx:focus,
        .tx:active {
          color: #0070f3;
          border-color: #0070f3;
          cursor: pointer;
        }
        .index {
          width: 12rem;
        }
        .time-stamp {
          width: 12rem;
        }
        .amount {
          width: 12rem;
        }
        .sender {
          width: 20rem;
        }
        .recipient {
          width: 20rem;
        }
      `}</style>
    </div>
  )
}
export default TransactionList
