import { useState, useEffect, useCallback, useRef } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const firstFocusRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    if (menuOpen && firstFocusRef.current) {
      firstFocusRef.current.focus()
    }
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [menuOpen])

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const offset = 72
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/shiva-gokari-resume.pdf'
    link.download = 'Shiva-Gokari-Resume.pdf'
    link.click()
  }

  return (
    <>
      <nav className={`navbar${isScrolled ? ' is-scrolled' : ''}`} aria-label="Main navigation">
        <div className="navbar__inner">
          {/* Brand */}
          <a href="#" className="navbar__brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            Shiva Gokari
          </a>

          {/* Desktop links */}
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '')
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`navbar__link${activeSection === id ? ' is-active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <button className="btn btn--primary navbar__cta" onClick={handleDownload} aria-label="Download Shiva Gokari's resume PDF">
            Download Resume
          </button>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div
          className="mobile-menu__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <div className="mobile-menu__drawer" ref={drawerRef}>
          <div className="mobile-menu__header">
            <span className="mobile-menu__brand">Shiva Gokari</span>
            <button
              ref={firstFocusRef}
              className="mobile-menu__close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="mobile-menu__links" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                className="mobile-menu__link"
                onClick={() => handleNavClick(href)}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="mobile-menu__footer">
            <button className="btn btn--primary" onClick={() => { handleDownload(); setMenuOpen(false) }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
