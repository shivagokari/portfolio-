import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'

interface CaseStudyItem {
  id: string
  client: string
  role: string
  handle: string
  date: string
  logo: string
  badgeText: string
  badgeCategory: 'seo' | 'ads' | 'smm'
  tweetText: string
  highlights: string[]
  imageSrc: string
  imageAlt: string
  hashtags: string[]
  stats: {
    replies: number
    reposts: number
    likes: number
    viewsMin: number
    viewsMax: number
  }
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'ynm-safety',
    client: 'YNM Safety',
    role: 'Digital Marketing Specialist',
    handle: '@shivagokari',
    date: 'SEO Case Study',
    logo: '/ynm-safety-logo.png',
    badgeText: 'Rank #1 on Google',
    badgeCategory: 'seo',
    tweetText:
      "Ranked @YNMSafety #1 on Google for the high-intent commercial B2B keyword 'cold plastic paint manufacturers' across India & global search! 🏆",
    highlights: [
      "Top position #1 in Google Search Results for targeted primary keyword",
      "+340% organic impressions boost in Google Search Console",
      "+180% increase in qualified inbound quotation calls & B2B RFQs",
      "Full technical audit, rich product schema & commercial entity mapping",
    ],
    imageSrc: '/case-studies/ynm-seo-ranking.jpg',
    imageAlt: 'YNM Safety Google Search Console Rank 1 Proof',
    hashtags: ['#SEO', '#GoogleRankings', '#SearchConsole', '#B2BGrowth'],
    stats: {
      replies: 38,
      reposts: 94,
      likes: 512,
      viewsMin: 14200,
      viewsMax: 24800,
    },
  },
  {
    id: 'bruno-homes',
    client: 'Bruno Homes',
    role: 'Digital Marketing Manager',
    handle: '@shivagokari',
    date: 'Ads & SEO Case Study',
    logo: '/brunohomes-logo.png',
    badgeText: '4.8x Blended ROAS',
    badgeCategory: 'ads',
    tweetText:
      "Scaled @BrunoHomes home appliances brand using a multi-channel acquisition engine across Meta Ads, Google Ads & Marketplace SEO 🔥",
    highlights: [
      "4.8x Blended ROAS on Meta Ads Manager campaigns",
      "42% reduction in Cost Per Lead (CPL) on Google Search Ads",
      "ManyChat AI chatbot automation cutting manual DM support time by 60%",
      "E-commerce listing optimization on Amazon, Flipkart & IndiaMART",
    ],
    imageSrc: '/case-studies/bruno-ads-performance.jpg',
    imageAlt: 'Bruno Homes Meta Ads and Google Ads Performance Dashboard',
    hashtags: ['#MetaAds', '#GoogleAds', '#PerformanceMarketing', '#ManyChat'],
    stats: {
      replies: 46,
      reposts: 128,
      likes: 689,
      viewsMin: 18500,
      viewsMax: 25000,
    },
  },
  {
    id: 'platinum-tech',
    client: 'Platinum Technology',
    role: 'Social Media Manager',
    handle: '@shivagokari',
    date: 'SMM & Viral Case Study',
    logo: '/platinum-logo.png',
    badgeText: '+280% Follower Growth',
    badgeCategory: 'smm',
    tweetText:
      "Transformed @PlatinumTech into a high-engagement brand community through AI-driven content pipelines, viral short-form Reels & automated engagement 📈",
    highlights: [
      "+280% organic follower growth across Instagram & LinkedIn",
      "5.2x engagement rate spike powered by short-form viral Reels",
      "AI-powered community workflows reducing customer response time to <3 min",
      "Weekly data-backed scheduling matrix mapped to peak audience active hours",
    ],
    imageSrc: '/case-studies/platinum-smm-growth.jpg',
    imageAlt: 'Platinum Technology Social Media Growth Analytics Dashboard',
    hashtags: ['#SocialMediaManagement', '#CanvaAI', '#ViralReels', '#CommunityGrowth'],
    stats: {
      replies: 29,
      reposts: 82,
      likes: 445,
      viewsMin: 10400,
      viewsMax: 22600,
    },
  },
]

/** Format number for display: 1000 → 1K, 12500 → 12.5K */
function formatCount(n: number): string {
  if (n >= 1000) {
    const k = n / 1000
    return k % 1 === 0 ? `${k}K` : `${k.toFixed(1)}K`
  }
  return String(n)
}

/** Hook: rolling live view count that changes within [min, max] range */
function useRollingViews(min: number, max: number): number {
  const [count, setCount] = useState(() => min + Math.floor(Math.random() * (max - min)))

  useEffect(() => {
    const tick = () => {
      setCount(() => {
        // Random walk within bounds: ±50-300 each tick
        const delta = Math.floor(Math.random() * 250) + 50
        const direction = Math.random() > 0.5 ? 1 : -1
        let next = min + Math.floor(Math.random() * (max - min))
        // Smooth: prefer small delta from current, but sometimes jump
        if (Math.random() > 0.3) {
          next = min + Math.floor(Math.random() * (max - min))
        } else {
          const raw = min + Math.floor(Math.random() * (max - min)) + direction * delta
          next = Math.max(min, Math.min(max, raw))
        }
        return next
      })
    }

    // Change every 1.5-3.5s at random intervals
    let timeoutId: ReturnType<typeof setTimeout>
    const schedule = () => {
      const delay = 1500 + Math.random() * 2000
      timeoutId = setTimeout(() => {
        tick()
        schedule()
      }, delay)
    }
    schedule()

    return () => clearTimeout(timeoutId)
  }, [min, max])

  return count
}

/** Animated number that smoothly transitions between values */
function AnimatedNumber({ value, formatter }: { value: number; formatter: (n: number) => string }) {
  const displayRef = useRef<HTMLSpanElement>(null)
  const prevValue = useRef(value)

  useEffect(() => {
    if (!displayRef.current) return
    const from = prevValue.current
    const to = value
    prevValue.current = value
    if (from === to) return

    let rafId: number
    const duration = 800
    const start = performance.now()

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(1, elapsed / duration)
      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress)
      const current = Math.round(from + (to - from) * eased)
      if (displayRef.current) {
        displayRef.current.textContent = formatter(current)
      }
      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }
    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [value, formatter])

  return <span ref={displayRef} className="twitter-card__metric-value">{formatter(value)}</span>
}

interface CaseStudiesProps {
  onOpenCase: (caseId: string) => void
}

export default function CaseStudies({ onOpenCase }: CaseStudiesProps) {
  const { ref, isVisible } = useInView()

  // Rolling view counts for each case study
  const views0 = useRollingViews(CASE_STUDIES[0].stats.viewsMin, CASE_STUDIES[0].stats.viewsMax)
  const views1 = useRollingViews(CASE_STUDIES[1].stats.viewsMin, CASE_STUDIES[1].stats.viewsMax)
  const views2 = useRollingViews(CASE_STUDIES[2].stats.viewsMin, CASE_STUDIES[2].stats.viewsMax)
  const rollingViews = [views0, views1, views2]

  return (
    <section className="case-studies section" id="case-studies" ref={ref}>
      <div className={`container ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <h2 className="section__title">Case Studies</h2>
        <p className="case-studies__intro">
          Real results from data-driven SEO, performance marketing campaigns, and social media growth strategies. Click any card to read the full case study.
        </p>

        <div className="case-studies__grid">
          {CASE_STUDIES.map((study, studyIdx) => (
            <article
              key={study.id}
              className="twitter-card"
              onClick={() => onOpenCase(study.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onOpenCase(study.id)
                }
              }}
              aria-label={`Read case study: ${study.client}`}
            >
              {/* Top Row: User Avatar, Name, Handle, and X Logo */}
              <div className="twitter-card__header">
                <div className="twitter-card__author">
                  <div className="twitter-card__avatar">
                    <img src={study.logo} alt={`${study.client} logo`} />
                  </div>
                  <div className="twitter-card__author-info">
                    <div className="twitter-card__name-row">
                      <span className="twitter-card__name">{study.client}</span>
                      {/* Verified Badge */}
                      <svg
                        className="twitter-card__verified"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="#16a34a"
                        aria-label="Verified Case Study"
                      >
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6c-1.58 0-2.95.875-3.6 2.148-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238 1.05 1.273 2.42 2.148 4 2.148 1.58 0 2.95-.875 3.6-2.148.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-1.05 2.148-2.42 2.148-4zM10.2 16.2l-3.5-3.5 1.4-1.4 2.1 2.1 5.3-5.3 1.4 1.4-6.7 6.7z" />
                      </svg>
                      <span className="twitter-card__badge twitter-card__badge--highlight">
                        {study.badgeText}
                      </span>
                    </div>
                    <div className="twitter-card__handle-row">
                      <span className="twitter-card__handle">{study.handle}</span>
                      <span className="twitter-card__dot">·</span>
                      <span className="twitter-card__date">{study.date}</span>
                    </div>
                  </div>
                </div>

                {/* Twitter / X icon */}
                <div className="twitter-card__x-logo" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </div>

              {/* Tweet Content */}
              <div className="twitter-card__body">
                <p className="twitter-card__text">{study.tweetText}</p>

                {/* Key Bullet Highlights */}
                <ul className="twitter-card__highlights">
                  {study.highlights.map((item, idx) => (
                    <li key={idx} className="twitter-card__highlight-item">
                      <span className="twitter-card__check-icon">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Hashtags */}
                <div className="twitter-card__hashtags">
                  {study.hashtags.map((tag) => (
                    <span key={tag} className="twitter-card__hashtag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Embedded Media Preview Image */}
                <div className="twitter-card__media">
                  <img
                    src={study.imageSrc}
                    alt={study.imageAlt}
                    className="twitter-card__image"
                    loading="lazy"
                  />
                  <div className="twitter-card__media-badge">
                    <span>Click to read full breakdown</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Tweet Metrics with Live Rolling Counts */}
              <div className="twitter-card__footer">
                <div className="twitter-card__metrics">
                  <span className="twitter-card__metric" title="Replies">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    {study.stats.replies}
                  </span>
                  <span className="twitter-card__metric" title="Reposts">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="17 1 21 5 17 9" />
                      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                      <polyline points="7 23 3 19 7 15" />
                      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                    </svg>
                    {study.stats.reposts}
                  </span>
                  <span className="twitter-card__metric" title="Likes">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    {study.stats.likes}
                  </span>
                  <span className="twitter-card__metric twitter-card__metric--live" title="Views (Live)">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                    <AnimatedNumber value={rollingViews[studyIdx]} formatter={formatCount} />
                    <span className="twitter-card__live-dot" />
                  </span>
                </div>
              </div>

              {/* CTA below metrics */}
              <div className="twitter-card__cta-row">
                <div className="twitter-card__cta-btn">
                  <span>Read Case Study</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
