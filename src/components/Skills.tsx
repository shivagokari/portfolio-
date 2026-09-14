import { useInView } from '../hooks/useInView'

const skillCategories = [
  {
    title: 'Digital Marketing & Ads',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
    skills: [
      'Search Engine Optimization (SEO)',
      'Google Ads (Search, Display, YouTube)',
      'Social Media Marketing & Advertising (Facebook, LinkedIn, Instagram, Twitter)',
      'Campaigns: Paid Ads, Influencer Outreach, Community Engagement',
      'WhatsApp API & WhatsApp Marketing',
      'Brand Awareness & Engagement'
    ],
  },
  {
    title: 'AI & Platforms',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
    ),
    skills: [
      'Social Media Management (AI-Powered)',
      'AI Tools: ChatGPT, Claude AI, Runway ML, Perplexity AI',
      'Platforms: Instagram, Facebook, LinkedIn, X (Twitter), YouTube Shorts',
      'Scheduling & Analytics: Hootsuite AI, Buffer, Later',
      'Design Tools: Canva Pro (AI Features)'
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
    ),
    skills: [
      'Google AntiGravity / AI Development Tool',
      'Google Search Console',
      'Google Keyword Planner',
      'Yoast SEO & Rank Math SEO',
      'Google Ads & Meta Ads',
      'WordPress',
      'Canva',
      'Buffer',
      'ChatGPT & Perplexity',
      'Artificial Intelligence Tools',
      'MS Office'
    ],
  }
]

export default function Skills() {
  const { ref, isVisible } = useInView()

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className={`container ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <h2 className="section__title">Skills & Tools</h2>
        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <div className="skills__category" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="skills__category-header">
                <span className="skills__category-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <ul className="skills__list">
                {cat.skills.map((skill, j) => (
                  <li className="skills__item" key={j}>
                    <span className="skills__item-bullet">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span className="skills__item-text">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
