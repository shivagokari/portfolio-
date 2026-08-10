import { useInView } from '../hooks/useInView'

const experiences = [
  {
    company: 'YNM Safety',
    location: 'Hyderabad',
    role: 'Digital Marketing Specialist',
    period: 'Oct 2025 - Present',
    logo: '/ynm-safety-logo.png',
    highlights: [
      'Led end-to-end social media management, content planning, and posting across all platforms to drive viral reach and engagement.',
      'Managed and optimized high-impact Google Ads and Meta Ads campaigns, significantly increasing brand awareness, lead generation, and ROI.',
      'Designed high-quality marketing creatives, posters, flyers, and edited engaging short-form video reels using Canva, CapCut, and VN Editor.',
      'Implemented advanced SEO strategies (keyword research, on-page optimization, content scaling) to boost organic traffic and search visibility.',
      'Leveraged AI tools like ChatGPT and Claude for content creation, SEO optimization, and campaign workflow automation.',
      'Designed and executed customer-centric WhatsApp marketing campaigns using the Sensy platform to boost customer engagement.'
    ],
  },
  {
    company: 'Bruno Homes',
    location: 'Hyderabad F/L',
    role: 'Digital Marketing Manager',
    period: 'Dec 2024 - Oct 2025',
    logo: '/brunohomes-logo.png',
    highlights: [
      'Executed Google, Meta, and LinkedIn Ads campaigns to maximize brand visibility and lead generation.',
      'Enabled local business growth by improving digital visibility (SEO, Google My Business, and IndiaMART product SEO) for top search rankings.',
      'Deployed ManyChat AI chatbots to automate customer support workflows, reducing manual DM workloads by 60%.',
      'Integrated AI-powered marketing tools with e-commerce platforms (Amazon, Flipkart, Meesho) for advanced automation.',
      'Executed direct WhatsApp marketing campaigns using WhatsApp API & Sensy for client engagement.'
    ],
  },
  {
    company: 'Platinum Technology',
    location: 'Remote',
    role: 'Social Media Manager',
    period: 'Aug 2023 - Nov 2024',
    logo: '/platinum-logo.png',
    highlights: [
      'Created, scheduled, and maintained a daily posting content calendar across multiple platforms using Canva and AI tools.',
      'Managed and optimized Facebook & Instagram ad campaigns for event promotions, community activities, and institutional campaigns.',
      'Refined marketing strategies using AI insights to analyze audience preferences, competitor trends, and optimal posting times.',
      'Integrated AI chatbots to automate community management responses, monitoring metrics (engagement, reach, CTR).'
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
