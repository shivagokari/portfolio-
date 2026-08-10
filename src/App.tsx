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
import { Component as LeverSwitch } from './components/ui/lever-switch'
import confetti from 'canvas-confetti'
import './App.css'

function triggerConfettiBlast() {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 28, spread: 360, ticks: 60, zIndex: 100000 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 45 * (timeLeft / duration);
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
  }, 220);
}

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [gateVisible, setGateVisible] = useState(true)
  const [thankYouVisible, setThankYouVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when site is toggled off or during Thank You reveal
  const siteRevealed = !gateVisible && !thankYouVisible
  useEffect(() => {
    if (!siteRevealed) {
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [siteRevealed])

  const handleToggle = (checked: boolean) => {
    setSwitchChecked(checked)
    if (checked) {
      // 1. Wait for physical lever flip animation (approx 550ms) to complete
      setTimeout(() => {
        setGateVisible(false) // Fade out entrance screen
        setThankYouVisible(true) // Fade in Thank You screen
        
        // 2. Blast celebration confetti
        triggerConfettiBlast()
        
        // 3. Keep Thank You text for 1.8s, then fade out to reveal portfolio
        setTimeout(() => {
          setThankYouVisible(false)
        }, 1800)
      }, 550)
    } else {
      // Instantly reset if toggled off
      setGateVisible(true)
      setThankYouVisible(false)
    }
  }

  return (
    <>
      {/* Black Entrance Gate Overlay */}
      <div className={`gate-overlay ${!gateVisible ? 'gate-overlay--hide' : ''}`}>
        <div className="gate-overlay__content">
          <h1 className="gate-overlay__title">SHIVA GOKARI</h1>
          <p className="gate-overlay__subtitle">To See Shiva Gokari Portfolio Turn on Toggle</p>
          <div className="gate-overlay__switch-box">
            <LeverSwitch checked={switchChecked} onChange={handleToggle} />
          </div>
          <p className="gate-overlay__hint">
            <span className={!switchChecked ? 'gate-overlay__hint-active' : ''}>NIGHT</span>
            <span className="gate-overlay__hint-dot">&middot;</span>
            <span className={switchChecked ? 'gate-overlay__hint-active' : ''}>DAY</span>
          </p>
        </div>
      </div>

      {/* Thank You Entrance Splash */}
      <div className={`thankyou-overlay ${thankYouVisible ? 'thankyou-overlay--show' : ''}`}>
        <div className="thankyou-overlay__content">
          <h2 className="thankyou-overlay__title">Thank You</h2>
          <p className="thankyou-overlay__subtitle">For visiting my portfolio website</p>
        </div>
      </div>

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
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Shiva Gokari. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
