import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './team'
import User from './User'
import Friends from './friends'




function App() {

  function handelClick() {
    alert('Clicked')
  }

  return (
    <>
      <h3>React core concept</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me</button>
    </>
  )
}

export default App
