import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Tools</h1>
      <p>このページはさまざまなツールをweb上で使えるようにしたページです。</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="todo/">Todo</Link>
        </li>
        <li>
          <Link to="links/">Links</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home