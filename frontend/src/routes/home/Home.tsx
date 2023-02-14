import * as React from 'react'
import Clock from './components/Clock'

const Home : React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>このページはさまざまなツールをweb上で使えるようにしたページです。</p>
      <Clock></Clock>
    </div>
  )
}

export default Home
