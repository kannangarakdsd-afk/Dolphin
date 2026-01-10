import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './common/Header'
import { Route, Router } from 'react-router-dom'
import Footer from './common/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen w-full">
      
      <Header className="w-full rounded-none" /> 
      
      <main className="flex-grow w-full">
        <span className="text-black">Main Content</span>
      </main>
      
      <Footer className="w-full rounded-none" />
      
    </div>
  )
}

export default App
