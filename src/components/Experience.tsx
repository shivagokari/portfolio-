import { useInView } from '../hooks/useInView'

const experiences = [
  {
    company: 'YNM Safety',
    location: 'Hyderabad',
    role: 'Digital Marketing Specialist',
    period: 'Oct 2025 - Present',
    logo: '/ynm-safety-logo.png',
    highlights: [
      'End-to-end social media management: content planning, posting, and engagement across platforms',
      'SEO strategies improving website traffic, keyword rankings, and search visibility',
      'Managed Google Ads & Meta Ads campaigns increasing brand awareness, leads, and ROI',
      'WhatsApp marketing campaigns using Sensy for customer engagement',
      'AI tools integration for content creation, automation, and marketing efficiency',
    ],
  },
  {
    company: 'Bruno Homes',
    location: 'Hyderabad',
    role: 'Digital Marketing Manager',
    period: 'Dec 2024 - Oct 2025',
    logo: '/brunohomes-logo.png',
    highlights: [
      'Managed Google, Meta, and LinkedIn Ads for brand visibility and lead generation',
      'Created Instagram posts, reels, and scripts using Canva & AI tools',
      'Deployed AI chatbots (ManyChat) to automate support, reducing manual DMs by 60%',
      'Integrated AI with e-commerce platforms (Amazon, Flipkart, Meesho)',
      'IndiaMART product SEO for top listing rankings',
    ],
  },
  {
    company: 'Platinum Technology',
    location: 'Remote',
    role: 'Social Media Manager',
    period: 'Aug 2023 - Nov 2024',
    logo: '/platinum-logo.png',
    highlights: [
      'Created and scheduled engaging content using Canva and AI tools for brand consistency',
      'Managed and optimized Facebook & Instagram Ads for events and programs',
      'AI-powered insights for optimal posting times, trending topics, and audience preferences',
      'Integrated AI chatbots for community management and automated responses',
      'Coordinated influencer collaborations to increase brand exposure',
    ],
  },
]

export default function Experience() {
  const { ref, isVisible } = useInView()

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className={`container ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <h2 className="section__title">Experience</h2>
        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <div className="experience__item" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="experience__dot" />
              <div className="experience__card">
                <div className="experience__header">
                  <div className="experience__header-left">
                    {exp.logo && (
                      <img src={exp.logo} alt={`${exp.company} logo`} className="experience__logo" />
                    )}
                    <div>
                      <h3 className="experience__role">{exp.role}</h3>
                      <p className="experience__company">
                        {exp.company} <span className="experience__location">&middot; {exp.location}</span>
                      </p>
                    </div>
                  </div>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <ul className="experience__list">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
