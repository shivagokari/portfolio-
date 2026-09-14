import { useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'

/* Animated counter hook */
function useCounter(target: number, duration = 1800, start = false) {
  const [val, setVal] = useState(0)
  const raf = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (!start) return
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3) // ease-out-cubic
      setVal(Math.round(ease * target))
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => { if (raf.current) cancelAnimationFrame(raf.current) }
  }, [start, target, duration])

  return val
}

/* Floating particles */
function Particles() {
  const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 8 + Math.random() * 10,
    size: 2 + Math.random() * 3,
  }))

  return (
    <div className="hero__particles" aria-hidden="true">
      {particles.map(p => (
        <div
          key={p.id}
          className="hero__particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

/* 3D Social icon button */
function SocialIcon3D({
  className, label, href, children
}: { className: string; label: string; href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-icon-3d ${className}`}
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  )
}

/* Floating badge */
function FloatBadge({
  className, icon, label, sub
}: { className: string; icon: string; label: string; sub?: string }) {
  return (
    <div className={`hero__float-badge ${className}`}>
      <div
        className="hero__badge-icon"
        style={{
          background: 'linear-gradient(135deg, rgba(22,196,94,0.25), rgba(0,230,118,0.1))',
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: '0.8125rem', fontWeight: 700 }}>{label}</div>
        {sub && <div style={{ fontSize: '0.65rem', opacity: 0.6, fontWeight: 400 }}>{sub}</div>}
      </div>
    </div>
  )
}

export default function Hero() {
  const { ref, isVisible } = useInView(0.1)

  const years   = useCounter(3,  1500, isVisible)
  const projs   = useCounter(10, 1800, isVisible)
  const saving  = useCounter(60, 2000, isVisible)

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

  // Smooth scroll and 3D interpolation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Progress over first 750px of scroll
      const progress = Math.min(Math.max(scrollY / 750, 0), 1)
      // Smooth 3D scroll rotation: rotateY -25deg, rotateX 10deg, translateZ 25px
      targetRotateY.current = progress * -25
      targetRotateX.current = progress * 9
      targetTranslateZ.current = progress * 22
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
    const rect = visualRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseRotateY.current = x * 16
    mouseRotateX.current = -y * 12
  }, [])

  const handleMouseLeave = useCallback(() => {
    mouseRotateY.current = 0
    mouseRotateX.current = 0
  }, [])

  const scrollToWork = useCallback(() => {
    const el = document.getElementById('work')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' })
  }, [])

  const handleDownload = useCallback(() => {
    const a = document.createElement('a')
    a.href = '/shiva-gokari-resume.pdf'
    a.download = 'Shiva-Gokari-Resume.pdf'
    a.click()
  }, [])

  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="hero__grid" aria-hidden="true" />
      <Particles />

      <div className="hero__inner">
        {/* ─── LEFT: Content ─── */}
        <div
          className="hero__content"
          ref={ref}
        >
          {/* Available badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Open to Digital Marketing Opportunities
          </div>

          {/* Name */}
          <h1 className="hero__name">Shiva Gokari</h1>

          {/* Title */}
          <p className="hero__title">
            <span>Digital Marketing</span> Specialist
          </p>

          {/* Description */}
          <p className="hero__description">
            3+ years driving SEO, Google Ads, Meta Ads and performance marketing—
            turning data into growth and brands into search leaders.
          </p>

          {/* Location */}
          <div className="hero__location">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            Hyderabad, India
          </div>

          {/* 3D Social Icons */}
          <div className="hero__socials">
            <SocialIcon3D
              className="social-icon-3d--linkedin"
              label="LinkedIn"
              href="https://www.linkedin.com/in/shivagokari/"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </SocialIcon3D>
            <SocialIcon3D
              className="social-icon-3d--whatsapp"
              label="WhatsApp"
              href="https://wa.me/918142825267?text=Hi%20Shiva%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect."
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </SocialIcon3D>
            <SocialIcon3D
              className="social-icon-3d--mail"
              label="Email"
              href="mailto:gskr070@gmail.com"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </SocialIcon3D>
          </div>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <button
              className="btn btn--hero-primary btn--pulse"
              onClick={scrollToWork}
              id="hero-view-work"
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button
              className="btn btn--hero-ghost"
              onClick={handleDownload}
              id="hero-download-resume"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </button>
          </div>

          {/* Animated Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">{years}+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">{projs}+</span>
              <span className="hero__stat-label">Campaigns Run</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">{saving}%</span>
              <span className="hero__stat-label">DM Automation</span>
            </div>
          </div>
        </div>

        {/* ─── RIGHT: 3D Photo Cutout + Floating Badges with Scroll & Mouse 3D Rotation ─── */}
        <div
          className="hero__visual"
          ref={visualRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hero__photo-stage" ref={photoStageRef}>
            {/* Glowing 3D pedestal & ambient aura (strictly behind subject) */}
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

            {/* Floating 3D badges with stereoscopic Z-depth */}
            <FloatBadge
              className="hero__float-badge--1"
              icon="🎯"
              label="SEO Expert"
              sub="Top rankings achieved"
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
            <FloatBadge
              className="hero__float-badge--4"
              icon="🤖"
              label="AI Powered"
              sub="Automation workflows"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
