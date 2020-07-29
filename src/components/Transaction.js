import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { TRANSACTIONS_ENDPOINT } from '../const'

const Transaction = ({ blockNumber }) => {
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    axios
      .get(TRANSACTIONS_ENDPOINT(blockNumber))
      .then((res) => {
        setTransactions(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  return (
    <div>
      {transactions.map((transaction) => {
        return (
          <Link href="/transaction" key={transaction.hash}>
            <div className="tx">
              <div className="hash">{transaction.hash}</div>
              <div className="time-stamp">{transaction.timestamp}</div>
              <div className="sender">{transaction.from}</div>
              <div className="state-object-address">
                {transaction.stateObject.address}
              </div>
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
        .hash {
          width: 12rem;
        }
        .time-stamp {
          width: 20rem;
        }
        .sender {
          width: 20rem;
        }
      `}</style>
    </div>
  )
}
export default Transaction
