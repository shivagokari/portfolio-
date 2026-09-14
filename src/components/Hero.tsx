import { useCallback } from 'react'
import { useInView } from '../hooks/useInView'

export default function Hero() {
  const { ref, isVisible } = useInView(0.1)

  const scrollToWork = useCallback(() => {
    const el = document.getElementById('work')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  const handleDownload = useCallback(() => {
    const link = document.createElement('a')
    link.href = '/shiva-gokari-resume.pdf'
    link.download = 'Shiva-Gokari-Resume.pdf'
    link.click()
  }, [])

  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="hero__inner">
        {/* Left — Content */}
        <div className={`hero__content fade-in-up${isVisible ? ' is-visible' : ''}`} ref={ref}>
          {/* Available badge */}
          <div className="hero__available" aria-label="Currently open to opportunities">
            <span className="hero__available-dot" aria-hidden="true" />
            Open to Digital Marketing Opportunities
          </div>

          {/* Name */}
          <h1 className="hero__name">Shiva Gokari</h1>

          {/* Title */}
          <p className="hero__title">Digital Marketing Specialist</p>

          {/* Description */}
          <p className="hero__description">
            3+ years of experience in SEO, Google Ads, Meta Ads and performance marketing—
            helping brands grow their online presence and drive measurable results.
          </p>

          {/* Location */}
          <span className="hero__location" aria-label="Location: Hyderabad, India">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Hyderabad, India
          </span>

          {/* CTA buttons */}
          <div className="hero__actions">
            <button className="btn btn--primary" onClick={scrollToWork} id="hero-view-work-btn">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn btn--secondary" onClick={handleDownload} id="hero-download-resume-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </button>
          </div>
        </div>

        {/* Right — Profile Photo */}
        <div className={`hero__image-wrap fade-in-up fade-delay-2${isVisible ? ' is-visible' : ''}`}>
          <div className="hero__image-container">
            <div className="hero__image-bg" aria-hidden="true" />
            <img
              src="/shiva.jpeg"
              alt="Shiva Gokari — Digital Marketing Specialist"
              className="hero__image"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
