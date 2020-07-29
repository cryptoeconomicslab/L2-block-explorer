import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { DEFAULT_TRANSACTION_VALUE, TRANSACTION_ENDPOINT } from '../const'

export default function Transaction() {
  const {
    query: { blockNumber, depositContractAddress, start, end }
  } = useRouter()
  const [transaction, setTransaction] = useState(DEFAULT_TRANSACTION_VALUE)
  useEffect(() => {
    axios
      .get(
        TRANSACTION_ENDPOINT(blockNumber, depositContractAddress, start, end)
      )
      .then((res) => {
        if (!Object.keys(res.data).length) {
          throw Error('Transaction not found.')
        }
        setTransaction(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  })
  return (
    <div className="container">
      <main>
        <Link href="/transactions">
          <div className="home-link">
            ← Go gack to Block {transaction.blockNumber}
          </div>
        </Link>
        <h2 className="description">Transaction Detail</h2>
        <div className="tx">
          <div className="hash">
            <div className="tx-title">Hash</div>
            <div>{transaction.hash}</div>
          </div>
          <div className="time-stamp">
            <div className="tx-title">Time Stamp</div>
            <div>{transaction.timestamp}</div>
          </div>
          <div className="block-number">
            <div className="tx-title">Block Number</div>
            <div>{transaction.blockNumber}</div>
          </div>
          {/* TODO: can not get from address
          <div className="sender">
            <div className="tx-title">Sender</div>
            <div>0x34333bbw42....</div>
            <div>{transaction.from}</div>
          </div> */}
          <div className="state-object">
            <div className="tx-title">State Object</div>
            {/* TODO: will consider what should we display here */}
            <div>{JSON.stringify(transaction.stateObject)}</div>
          </div>
          <div className="token-adderss">
            <div className="tx-title">Deposit Contract Address</div>
            {/* TODO: update depositContractAddress to tokenContractAddress */}
            <div>
              <a
                href={`${process.env.MAINCHAIN_BLOCK_EXPLORER_URL}/address/${transaction.depositContractAddress}`}
                target="_blank"
                rel="noopener"
              >
                {transaction.depositContractAddress}
              </a>
            </div>
          </div>
          <div className="range">
            <div className="tx-title">Range</div>
            <div>
              {transaction.range.start}-{transaction.range.end}
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          width: 80%;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }
        .home-link:hover {
          color: #0070f3;
          border-color: #0070f3;
          cursor: pointer;
        }
        .description {
          width: 100;
          line-height: 1;
          font-size: 2rem;
        }

        .tx-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .tx {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 1.2rem;
          flex-basis: 45%;
          padding: 0 1rem;
          color: inherit;
          text-decoration: none;
          border: 2px solid #eaeaea;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .tx div {
          display: flex;
          padding: 0.5rem;
        }
        .tx-title {
          width: 12rem;
          font-weight: 600;
        }
        @media (max-width: 600px) {
          .block-list {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
