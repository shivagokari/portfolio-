import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import DesertAnimation from './components/DesertAnimation'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero scrollY={scrollY} />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Portfolio />
      <Contact />
      <DesertAnimation />
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Shiva Gokari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
