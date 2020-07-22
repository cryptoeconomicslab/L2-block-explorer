import Link from 'next/link'
import { useRouter } from 'next/router'
import Transaction from '../components/Transaction'

export default function Transactions() {
  const {
    query: { blockNumber }
  } = useRouter()

  return (
    <div className="container">
      <main>
        <h1 className="title">Transactions</h1>
        <Link href="/">
          <div className="home-link"> ← Go gack to block list </div>
        </Link>
        <h2 className="description">For Block 1</h2>
        <div className="tx-list">
          <div className="tx-title">
            <div className="hash-title">Hash</div>
            <div className="time-stamp-title">Time Stamp</div>
            <div className="sender-title">From</div>
            <div className="state-object-title">To</div>
          </div>
          <Transaction blockNumber={blockNumber} />
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

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
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
        .tx-title {
          display: flex;
          flex-basis: 45%;
          padding: 0 1rem;
          color: inherit;
          text-decoration: none;
          border: 2px solid #eaeaea;
          transition: color 0.15s ease, border-color 0.15s ease;
          font-weight: 600;
        }
        .hash-title {
          width: 12rem;
        }
        .time-stamp-title {
          width: 20rem;
        }
        .sender-title {
          width: 20rem;
        }
        .logo {
          height: 1em;
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
