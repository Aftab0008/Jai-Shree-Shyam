// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Heder'
import Hero from './components/Hero'
import Product from './components/Product'
import Contact from './components/Contact'
import Floting from './components/Floting'
import Footer from './components/Footer'
import About from './components/About'
import Team from './components/Team'
import WaterPreloader from './components/WaterPreloader'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {/* PRELOADER */}
      {loading && <WaterPreloader onComplete={() => setLoading(false)} />}

      {/* MAIN WEBSITE */}
      {!loading && (
        <div className="App">
          <Header />

          <Routes>
            {/* Keep routes if needed later */}
            {/* <Route path="/" element={<Hero />} /> */}
          </Routes>

          <Hero />
          <Product />
          <About />
          <Team />
          <Floting />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
