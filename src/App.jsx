import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
=======
import Header from './common/Header'
import { Route, Router } from 'react-router-dom'
import Footer from './common/Footer'
>>>>>>> 4def3c8436e1caa1949eac458c5cbe99ab1e0178

function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
=======
    <div className="flex flex-col min-h-screen w-full">
      
      <Header className="w-full rounded-none" /> 
      
      <main className="flex-grow w-full">
        <span className="text-black">Main Content</span>
      </main>
      
      <Footer className="w-full rounded-none" />
      
    </div>
>>>>>>> 4def3c8436e1caa1949eac458c5cbe99ab1e0178
  )
}

export default App
