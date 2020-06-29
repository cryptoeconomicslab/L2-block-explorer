import Head from "next/head"

import Block from "../components/Block"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>L2 Block Expolorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to L2 Block Expolorer</h1>
        <h2 className="description">Latest Blocks</h2>
        <div className="block-list">
          <div className="block-title">
            <div className="block-number">No.</div>
            <div className="time-stamp">Time Stamp</div>
            <div className="transactions">Transactions</div>
          </div>
          <Block />
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

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

        .description {
          width: 100;
          line-height: 1;
          font-size: 2rem;
        }

        .block-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .block-title {
          display: flex;
          flex-basis: 45%;
          padding: 0 1rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 2px solid #eaeaea;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .block-title div {
          margin: 0.5rem;
          font-size: 1.1rem;
          line-height: 1.5;
        }
        .block-number {
          width: 6rem;
        }
        .time-stamp {
          width: 30rem;
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
