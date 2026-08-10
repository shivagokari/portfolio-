import { useCallback, useEffect, useState, type ReactElement } from 'react'

interface HeroProps {
  scrollY: number
}

const STATS_CONFIG = [
  { target: 3, suffix: '+' as const, label: 'Years Experience' },
  { target: 10, suffix: '+' as const, label: 'Brands Managed' },
  { target: 60, suffix: '%' as const, label: 'DM Reduction via AI' },
] as const

const COUNT_DURATION_MS = 1400
const PAUSE_AT_TARGET_MS = 3200

function useLoopingCountUp(): number[] {
  const [values, setValues] = useState<number[]>(() => STATS_CONFIG.map(() => 0))

  useEffect(() => {
    let cancelled = false
    let rafId = 0
    let timeoutId: ReturnType<typeof setTimeout>

    const easeOutCubic = (t: number): number => 1 - (1 - t) ** 3

    const scheduleNextCycle = (): void => {
      timeoutId = setTimeout(() => {
        if (cancelled) return
        setValues(STATS_CONFIG.map(() => 0))
        runAnimate()
      }, PAUSE_AT_TARGET_MS)
    }

    const runAnimate = (): void => {
      const start = performance.now()
      const step = (now: number): void => {
        if (cancelled) return
        const elapsed = now - start
        const t = Math.min(1, elapsed / COUNT_DURATION_MS)
        const e = easeOutCubic(t)
        setValues(STATS_CONFIG.map((s) => Math.round(s.target * e)))
        if (t < 1) {
          rafId = requestAnimationFrame(step)
        } else {
          scheduleNextCycle()
        }
      }
      rafId = requestAnimationFrame(step)
    }

    runAnimate()

    return () => {
      cancelled = true
      cancelAnimationFrame(rafId)
      clearTimeout(timeoutId)
    }
  }, [])

  return values
}

function ScrollMouseButton(): ReactElement {
  const handleScrollToNext = useCallback((): void => {
    const el = document.getElementById('about')
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <button
      type="button"
      className="hero__scroll-mouse"
      onClick={handleScrollToNext}
      aria-label="Scroll to next section"
    >
      <span className="hero__scroll-mouse-body" aria-hidden>
        <span className="hero__scroll-mouse-wheel" />
      </span>
      <span className="hero__scroll-line" aria-hidden />
    </button>
  )
}

export default function Hero({ scrollY }: HeroProps): ReactElement {
  const statValues = useLoopingCountUp()
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    // Smooth 3D tilt calculated relative to card boundaries
    const tiltX = -(y / (rect.height / 2)) * 14
    const tiltY = (x / (rect.width / 2)) * 14
    
    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" style={{ transform: `translate(${scrollY * 0.03}px, ${scrollY * 0.05}px)` }} />
        <div className="hero__orb hero__orb--2" style={{ transform: `translate(${-scrollY * 0.02}px, ${scrollY * 0.04}px)` }} />
        <div className="hero__orb hero__orb--3" style={{ transform: `translate(${scrollY * 0.01}px, ${-scrollY * 0.03}px)` }} />
        <div className="hero__grid" />
        <div className="hero__lines" aria-hidden />
      </div>
      <div className="hero__content container" style={{ opacity: Math.max(0, 1 - scrollY / 600), transform: `translateY(${scrollY * 0.3}px)` }}>
        <div className="hero__main">
          <div className="hero__copy">
            <div className="hero__badge">DIGITAL MARKETING AND SOCIAL MEDIA SPECIALIST</div>
            <h1 className="hero__title">
              Hi, I'm <span className="hero__name">Shiva Gokari</span>
            </h1>
            <p className="hero__subtitle">
              3+ years crafting data-driven campaigns with AI-powered digital marketing strategies.
              Turning brands into digital powerhouses through SEO, Social Media, and Performance Ads.
            </p>
            <div className="hero__cta">
              <a href="https://www.linkedin.com/in/shiva-g-97b251276" target="_blank" rel="noopener noreferrer" className="btn btn--primary">View My LinkedIn</a>
              <a href="/shiva-gokari-resume.pdf" download="Shiva_Gokari_Resume.pdf" className="btn btn--outline">Download Now</a>
            </div>
            <div className="hero__stats">
              {STATS_CONFIG.map((stat, i) => (
                <div key={stat.label} className="hero__stat">
                  <span className="hero__stat-number">
                    {statValues[i]}
                    {stat.suffix}
                  </span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div 
            className="hero__visual"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }}
          >
            <div 
              className="hero__glass"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.04 : 1}, ${isHovered ? 1.04 : 1}, 1)`,
                transition: isHovered ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="hero__avatar" style={{ transform: 'translateZ(10px)' }}>
                <img src="/shiva.jpeg" alt="Shiva Gokari" />
              </div>
              
              {/* 3D Parallax Floating Tags */}
              <div 
                className="hero__floating-tag hero__floating-tag--1"
                style={{
                  transform: `translate3d(${tilt.y * 1.2}px, ${-tilt.x * 1.2}px, 40px)`,
                  transition: isHovered ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              >
                <span>AI Ads ✨</span>
              </div>
              <div 
                className="hero__floating-tag hero__floating-tag--2"
                style={{
                  transform: `translate3d(${-tilt.y * 0.9}px, ${tilt.x * 0.9}px, 60px)`,
                  transition: isHovered ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              >
                <span>SEO 📈</span>
              </div>
              <div 
                className="hero__floating-tag hero__floating-tag--3"
                style={{
                  transform: `translate3d(${tilt.y * 0.6}px, ${-tilt.x * 0.6}px, 30px)`,
                  transition: isHovered ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              >
                <span>SMM 🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__scroll">
        <ScrollMouseButton />
      </div>
    </section>
  )
}
