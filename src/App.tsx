import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const a = '123'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App