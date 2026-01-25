import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './common/Header'
import { Route, Routes } from 'react-router-dom'

import MainLayout from './Layout/MainLayout'
import HomePage from './Pages/HomePage'
import GalleryPage from './Pages/GalleryPage'
import AboutPage from './Pages/AboutPage'
import ContactUsPage from './Pages/ContactUsPage'
import FacilitiesPage from './Pages/FacilitiesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<MainLayout />}>
       <Route path="/" element={<HomePage />} />
       <Route path="/gallery" element={<GalleryPage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/contact" element={<ContactUsPage />} />
       <Route path="/facilities" element={<FacilitiesPage />} />
      </Route>
    </Routes>
  )
}

export default App
