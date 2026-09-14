import { useState } from 'react'
import { useInView } from '../hooks/useInView'

interface ExperienceItem {
  company: string
  location: string
  role: string
  period: string
  logo: string
  summary: string
  highlights: string[]
  tools: string[]
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'YNM Safety',
    location: 'Hyderabad',
    role: 'Digital Marketing Specialist',
    period: 'Oct 2025 – Present',
    logo: '/ynm-safety-logo.png',
    summary: 'Led SEO and performance marketing to improve search visibility and organic growth for a safety equipment brand.',
    highlights: [
      'Developed and executed SEO strategies improving keyword rankings, website traffic and search visibility',
      'Managed Google Ads and Meta Ads campaigns to increase brand awareness, qualified leads and ROI',
      'Integrated AI tools for content creation, automation and marketing efficiency',
      'Handled end-to-end social media management: planning, content creation, posting and engagement',
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'Google Search Console', 'GA4', 'Ahrefs', 'Canva', 'ChatGPT'],
  },
  {
    company: 'Bruno Homes',
    location: 'Hyderabad',
    role: 'Digital Marketing Manager',
    period: 'Dec 2024 – Oct 2025',
    logo: '/brunohomes-logo.png',
    summary: 'Managed full-funnel digital marketing for a real estate and home appliances brand across Google, Meta and LinkedIn.',
    highlights: [
      'Managed Google, Meta and LinkedIn Ads for brand visibility and lead generation',
      'Created Instagram posts, reels and scripts using Canva and AI tools',
      'Deployed AI chatbots (ManyChat) to automate support, reducing manual DMs by 60%',
      'Integrated AI workflows with e-commerce platforms: Amazon, Flipkart and Meesho',
      'Optimised IndiaMART product listings for top search rankings',
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Ads', 'ManyChat', 'Canva', 'Amazon Seller Central', 'IndiaMART'],
  },
  {
    company: 'Platinum Technology',
    location: 'Remote',
    role: 'Social Media Manager',
    period: 'Jan 2024 – Dec 2024',
    logo: '/platinum-logo.png',
    summary: 'Drove brand awareness and community growth for a technology company through strategic social media management.',
    highlights: [
      'Planned and executed social media strategy across LinkedIn, Instagram and Twitter',
      'Grew follower count and engagement metrics through consistent content and community management',
      'Created data-driven content calendars and monitored performance analytics',
      'Collaborated with design and tech teams on campaign execution and creative assets',
    ],
    tools: ['Meta Business Suite', 'LinkedIn Analytics', 'Canva', 'Google Analytics', 'Hootsuite'],
  },
]

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

interface ExpItemProps {
  exp: ExperienceItem
  delay: number
  isVisible: boolean
}

function ExpItem({ exp, delay, isVisible }: ExpItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`exp-item${open ? ' is-open' : ''} fade-up d${delay}${isVisible ? ' is-visible' : ''}`}
      role="article"
    >
      {/* Header / trigger */}
      <button
        className="exp-item__header"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={`exp-body-${exp.company.replace(/\s/g, '-').toLowerCase()}`}
      >
        <div className="exp-item__left">
          <div className="exp-item__logo-box">
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="exp-item__logo"
              loading="lazy"
              width={40}
              height={40}
            />
          </div>
          <div className="exp-item__info">
            <div className="exp-item__role">{exp.role}</div>
            <div className="exp-item__company-row">
              <span className="exp-item__company">{exp.company}</span>
              <span className="exp-item__company-dot" aria-hidden="true">&middot;</span>
              <span className="exp-item__company-meta">{exp.location}</span>
            </div>
          </div>
        </div>
        <div className="exp-item__right">
          <span className="exp-item__period">{exp.period}</span>
          <span className="exp-item__toggle" aria-hidden="true">
            <ChevronIcon />
          </span>
        </div>
      </button>

      {/* Expandable body */}
      <div
        id={`exp-body-${exp.company.replace(/\s/g, '-').toLowerCase()}`}
        className="exp-item__body"
        aria-hidden={!open}
      >
        <div className="exp-item__content">
          <p className="exp-item__summary">{exp.summary}</p>

          <div className="exp-item__section-title">Key Responsibilities</div>
          <ul className="exp-item__highlights" role="list">
            {exp.highlights.map((h, i) => (
              <li key={i} className="exp-item__highlight">{h}</li>
            ))}
          </ul>

          <div className="exp-item__section-title">Tools Used</div>
          <div className="exp-item__tools" role="list">
            {exp.tools.map(tool => (
              <span key={tool} className="exp-item__tool" role="listitem">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <div className={`fade-up${isVisible ? ' is-visible' : ''}`} ref={ref}>
          <span className="section-label">Experience</span>
          <h2 className="section-heading" id="experience-heading">Work Experience</h2>
          <div className="section-divider" aria-hidden="true" />
        </div>

        <div className="experience__list">
          {EXPERIENCES.map((exp, i) => (
            <ExpItem
              key={exp.company}
              exp={exp}
              delay={Math.min(i + 1, 4)}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
