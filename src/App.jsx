import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './common/Header'
import { Route, Routes } from 'react-router-dom'

import MainLayout from './Layout/MainLayout'
import HomePage from './Pages/HomePage'
import GalleryPage from './Pages/GalleryPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<MainLayout />}>
       <Route path="/" element={<HomePage />} />
       <Route path="/gallery" element={<GalleryPage />} />
      </Route>
    </Routes>
  )
}

export default App
