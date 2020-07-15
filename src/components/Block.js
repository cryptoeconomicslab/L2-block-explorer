import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BLOCKS_ENDPOINT } from '../const'

const Block = () => {
  const [blocks, setBlocks] = useState([])
  useEffect(() => {
    axios
      .get(BLOCKS_ENDPOINT)
      .then((res) => {
        setBlocks(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      {blocks.map((block) => {
        return (
          <Link href="/transactions">
            <div className="block">
              <div className="block-number">{block.blockNumber}</div>
              <div className="time-stamp">{block.timestamp}</div>
              <div className="transactions">
                {block.transactions} Transactions
              </div>
            </div>
          </Link>
        )
      })}
      <style jsx>{`
        .block {
          display: flex;
          flex-basis: 45%;
          padding: 0 1rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 2px solid #eaeaea;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .block:hover,
        .block:focus,
        .block:active {
          color: #0070f3;
          border-color: #0070f3;
          cursor: pointer;
        }
        .block div {
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
      `}</style>
    </div>
  )
}

export default Block
