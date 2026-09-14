import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'

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

function FloatBadge({
  className,
  icon,
  label,
  sub,
}: {
  className: string
  icon: string
  label: string
  sub?: string
}) {
  return (
    <div className={`hero__float-badge ${className}`}>
      <div className="hero__badge-icon">{icon}</div>
      <div className="hero__badge-texts">
        <div className="hero__badge-label">{label}</div>
        {sub && <div className="hero__badge-sub">{sub}</div>}
      </div>
    </div>
  )
}

export default function Hero({ scrollY }: HeroProps): ReactElement {
  const statValues = useLoopingCountUp()

  // 3D Scroll Rotation & Mouse Parallax Refs
  const visualRef = useRef<HTMLDivElement>(null)
  const photoStageRef = useRef<HTMLDivElement>(null)
  const targetRotateY = useRef(0)
  const targetRotateX = useRef(0)
  const targetTranslateZ = useRef(0)
  const mouseRotateY = useRef(0)
  const mouseRotateX = useRef(0)
  const currRotateY = useRef(0)
  const currRotateX = useRef(0)
  const currTranslateZ = useRef(0)

  // Smooth scroll and 3D interpolation with LERP
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = Math.min(Math.max(window.scrollY / 750, 0), 1)
      // Smooth 3D scroll rotation: rotateY -24deg, rotateX 9deg, translateZ 22px
      targetRotateY.current = scrollProgress * -24
      targetRotateX.current = scrollProgress * 9
      targetTranslateZ.current = scrollProgress * 22
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    let animId: number
    const loop = () => {
      const targetY = targetRotateY.current + mouseRotateY.current
      const targetX = targetRotateX.current + mouseRotateX.current
      const targetZ = targetTranslateZ.current

      // Butter-smooth LERP interpolation (0.08 factor)
      currRotateY.current += (targetY - currRotateY.current) * 0.08
      currRotateX.current += (targetX - currRotateX.current) * 0.08
      currTranslateZ.current += (targetZ - currTranslateZ.current) * 0.08

      if (photoStageRef.current) {
        photoStageRef.current.style.transform = `perspective(1200px) rotateX(${currRotateX.current.toFixed(2)}deg) rotateY(${currRotateY.current.toFixed(2)}deg) translateZ(${currTranslateZ.current.toFixed(1)}px)`
      }
      animId = requestAnimationFrame(loop)
    }
    animId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animId)
    }
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(hover: none)').matches) return
    const rect = visualRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseRotateY.current = x * 18
    mouseRotateX.current = -y * 14
  }, [])

  const handleMouseLeave = useCallback(() => {
    mouseRotateY.current = 0
    mouseRotateX.current = 0
  }, [])

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

          {/* 3D Photo Cutout + Floating Elements with Smooth Scroll & Mouse Rotation */}
          <div 
            className="hero__visual"
            ref={visualRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hero__photo-stage" ref={photoStageRef}>
              {/* Deep green & black backdrop + ambient aura strictly behind subject (no line on face) */}
              <div className="hero__photo-backdrop" aria-hidden="true" />
              <div className="hero__photo-aura" aria-hidden="true" />
              <div className="hero__pedestal-glow" aria-hidden="true" />
              <div className="hero__pedestal-disk" aria-hidden="true" />

              {/* Cutout image without background */}
              <div className="hero__photo-wrapper-3d">
                <img 
                  src="/shiva.png" 
                  alt="Shiva Gokari — Digital Marketing Specialist" 
                  className="hero__photo-cutout"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Floating 3D Badges around Shiva */}
              <FloatBadge
                className="hero__float-badge--1"
                icon="🎯"
                label="SEO Expert"
                sub="Top rankings achieved"
              />
              <FloatBadge
                className="hero__float-badge--4"
                icon="🤖"
                label="AI Powered"
                sub="Automation workflows"
              />
              <FloatBadge
                className="hero__float-badge--2"
                icon="📊"
                label="Google Ads"
                sub="Certified campaigns"
              />
              <FloatBadge
                className="hero__float-badge--3"
                icon="⚡"
                label="Meta Ads"
                sub="Lead generation"
              />
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
