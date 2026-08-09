import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/home/Homepage'
import WebDesign from './components/subsidaries/web-design/WebDesign'
import Podcast from './components/subsidaries/podcast/Podcast'
import Gaming from './components/subsidaries/gaming/Gaming'
import About from './components/about/About'
import Contact from './components/contact/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
