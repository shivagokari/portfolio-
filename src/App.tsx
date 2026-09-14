import { useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import SelectedWork from './components/SelectedWork'
import Skills from './components/Skills'
import ResumeContact from './components/ResumeContact'
import Footer from './components/Footer'
import CaseStudyModal from './components/CaseStudyModal'
import { Component as LeverSwitch } from './components/ui/lever-switch'
import confetti from 'canvas-confetti'

// Celebration confetti blast
function triggerConfettiBlast() {
  const duration = 2.4 * 1000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 32, spread: 360, ticks: 70, zIndex: 100000 }

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    const timeLeft = animationEnd - Date.now()
    if (timeLeft <= 0) {
      return clearInterval(interval)
    }
    const particleCount = 45 * (timeLeft / duration)
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.35), y: Math.random() - 0.2 } })
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.65, 0.9), y: Math.random() - 0.2 } })
  }, 200)
}

// Active section detection via Intersection Observer
function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'work', 'skills', 'contact']
    const observers: IntersectionObserver[] = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.3, rootMargin: '-68px 0px 0px 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return activeSection
}

export default function App() {
  const [activeCase, setActiveCase] = useState<string | null>(null)
  const activeSection = useActiveSection()

  // LeverSwitch Gate and Thank You Overlay State
  const [switchChecked, setSwitchChecked] = useState(false)
  const [gateVisible, setGateVisible] = useState(true)
  const [thankYouVisible, setThankYouVisible] = useState(false)

  // Lock body scroll while entrance gate or thank you overlay is active
  const siteRevealed = !gateVisible && !thankYouVisible
  useEffect(() => {
    if (!siteRevealed) {
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [siteRevealed])

  // Handle Lever physical flip & celebration flow
  const handleToggle = useCallback((checked: boolean) => {
    setSwitchChecked(checked)
    if (checked) {
      // Allow mechanical lever flip animation (520ms)
      setTimeout(() => {
        setGateVisible(false)
        setThankYouVisible(true)
        triggerConfettiBlast()

        // Keep Thank You message for 1.8s then smoothly reveal the portfolio
        setTimeout(() => {
          setThankYouVisible(false)
        }, 1800)
      }, 520)
    } else {
      setGateVisible(true)
      setThankYouVisible(false)
    }
  }, [])

  // Allow re-triggering the lever toggle switch anytime from Navbar
  const handleResetGate = useCallback(() => {
    setSwitchChecked(false)
    setGateVisible(true)
    setThankYouVisible(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      {/* ─── Mechanical Lever Entrance Gate Overlay ─── */}
      <div
        className={`gate-overlay ${!gateVisible ? 'gate-overlay--hide' : ''}`}
        aria-hidden={!gateVisible}
      >
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

      {/* ─── Thank You Splash Screen ─── */}
      <div
        className={`thankyou-overlay ${thankYouVisible ? 'thankyou-overlay--show' : ''}`}
        aria-hidden={!thankYouVisible}
      >
        <div className="thankyou-overlay__content">
          <h2 className="thankyou-overlay__title">Thank You</h2>
          <p className="thankyou-overlay__subtitle">For visiting my portfolio website</p>
        </div>
      </div>

      {/* ─── Main Portfolio Content ─── */}
      <Navbar activeSection={activeSection} onToggleGate={handleResetGate} />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <SelectedWork onOpenCase={setActiveCase} />
        <Skills />
        <ResumeContact />
      </main>

      <Footer />

      <CaseStudyModal
        activeCase={activeCase}
        onClose={() => setActiveCase(null)}
      />
    </>
  )
}
