import Link from "next/link";
export default function Block() {
  return (
    <div className="container">
      <main>
        <Link href="/block">
          <div className="home-link"> ← Go gack to Block 1</div>
        </Link>
        <h2 className="description">Transaction Detail</h2>
        <div className="tx">
          <div className="hash">
            <div className="tx-title">Hash</div>
            <div>0x342342....</div>
          </div>
          <div className="status">
            <div className="tx-title">Status</div>
            <div>Succeed</div>
          </div>
          <div className="block-number">
            <div className="tx-title">Block Number</div>
            <div>1</div>
          </div>
          <div className="time-stamp">
            <div className="tx-title">Time Stamp</div>
            <div>45 secs ago (Jun-18-2020 09:42:47 AM +UTC)</div>
          </div>
          <div className="sender">
            <div className="tx-title">Sender</div>
            <div>0x34333bbw42....</div>
          </div>
          <div className="recepient">
            <div className="tx-title">Recepient</div>
            <div>0x279087s543....</div>
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
          width: 10rem;
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
  );
}
