import { useInView } from '../hooks/useInView'

const skillCategories = [
  {
    title: 'Marketing & Ads',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
    skills: ['Google Ads (Search, Display, YouTube)', 'Meta Ads (Facebook & Instagram)', 'LinkedIn Ads', 'PPC Campaign Management', 'Influencer Marketing', 'WhatsApp Marketing'],
  },
  {
    title: 'SEO & Analytics',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
    ),
    skills: ['Search Engine Optimization', 'Google Analytics', 'Google Search Console', 'Google Keyword Planner', 'Yoast SEO & Rank Math', 'Website Optimization'],
  },
  {
    title: 'Social Media',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    skills: ['Instagram', 'Facebook', 'LinkedIn', 'X (Twitter)', 'YouTube Shorts', 'Community Engagement'],
  },
  {
    title: 'AI & Automation',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
    ),
    skills: ['ChatGPT & Perplexity', 'ManyChat AI Chatbots', 'Copy.ai & Jasper', 'Runway ML', 'Content Automation', 'AI-Powered Analytics'],
  },
  {
    title: 'Design & Tools',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
    ),
    skills: ['Canva Pro', 'WordPress', 'Buffer & Hootsuite', 'CapCut & VN Editor', 'MS Office', 'WhatsApp API & Sensy'],
  },
  {
    title: 'E-commerce & Marketplaces',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    ),
    skills: ['Amazon & Flipkart Listings', 'Meesho & Marketplace Ads', 'IndiaMART SEO & Leads', 'Product Catalog Optimization', 'Seller Central & Brand Stores', 'B2B Portal Management'],
  },
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
              <div className="skills__tags">
                {cat.skills.map((skill, j) => (
                  <span className="skills__tag" key={j}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
