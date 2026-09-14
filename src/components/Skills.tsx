import { useInView } from '../hooks/useInView'

const SKILL_CATEGORIES = [
  { id: 'seo', icon: '🔍', title: 'SEO', skills: ['Technical SEO', 'On-Page SEO', 'Off-Page SEO', 'Keyword Research', 'Content Optimisation'] },
  { id: 'paid', icon: '📢', title: 'Paid Media', skills: ['Google Ads', 'Meta Ads', 'YouTube Ads', 'Lead Generation', 'Campaign Optimisation'] },
  { id: 'analytics', icon: '📊', title: 'Analytics', skills: ['Google Analytics 4', 'Search Console', 'Performance Analysis', 'Reporting & Insights'] },
  { id: 'web', icon: '🌐', title: 'Website', skills: ['Website Optimisation', 'Landing Pages', 'Conversion Optimisation', 'WordPress'] },
]

const TOOLS = 'Google Ads · Meta Ads Manager · GA4 · Google Search Console · Ahrefs · Keyword Planner · Canva · ManyChat · ChatGPT · WordPress · Looker Studio · Meta Business Suite · Amazon Seller Central · IndiaMART'

export default function Skills() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className={`fade-up${isVisible ? ' is-visible' : ''}`} ref={ref}>
          <span className="section-label">Skills</span>
          <h2 className="section-heading" id="skills-heading">Expertise</h2>
          <div className="section-divider" aria-hidden="true" />
        </div>

        <div className="skills__grid">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.id}
              className={`skill-category fade-up d${Math.min(i + 1, 4)}${isVisible ? ' is-visible' : ''}`}
              aria-labelledby={`sk-${cat.id}`}
            >
              <div className="skill-category__icon" aria-hidden="true">{cat.icon}</div>
              <div className="skill-category__title" id={`sk-${cat.id}`}>{cat.title}</div>
              <ul className="skill-category__list" role="list">
                {cat.skills.map(s => (
                  <li key={s} className="skill-category__item" role="listitem">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`skills__tools fade-up d4${isVisible ? ' is-visible' : ''}`}>
          <div className="skills__tools-label">Tools</div>
          <div className="skills__tools-list" aria-label="Tools used">{TOOLS}</div>
        </div>
      </div>
    </section>
  )
}
