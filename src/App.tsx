import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import SelectedWork from './components/SelectedWork'
import Skills from './components/Skills'
import ResumeContact from './components/ResumeContact'
import Footer from './components/Footer'
import CaseStudyModal from './components/CaseStudyModal'

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

  return (
    <>
      <Navbar activeSection={activeSection} />

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
