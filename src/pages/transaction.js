import Link from 'next/link'
import { useRouter } from 'next/router'
import TransactionDetail from '../components/TransactionDetail'

export default function Transaction() {
  const {
    query: { blockNumber, depositContractAddress, start, end }
  } = useRouter()
  return (
    <div className="container">
      <main>
        <Link href={`/transactions?blockNumber=${blockNumber}`}>
          <div className="home-link">← Go gack to Block {blockNumber}</div>
        </Link>
        <TransactionDetail
          blockNumber={blockNumber}
          depositContractAddress={depositContractAddress}
          start={start}
          end={end}
        />
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
