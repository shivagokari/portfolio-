import { useInView } from '../hooks/useInView'

interface WorkProject {
  id: string
  number: string
  title: string
  category: string
  tags: string[]
  description: string
}

const PROJECTS: WorkProject[] = [
  {
    id: 'ynm-safety',
    number: '01',
    title: 'YNM Safety — SEO Project',
    category: 'SEO / Website Optimisation',
    tags: ['On-Page SEO', 'Technical SEO', 'Keyword Research', 'Google Search Console'],
    description: 'End-to-end SEO implementation for a safety equipment manufacturer, improving keyword rankings and organic search visibility.',
  },
  {
    id: 'google-ads',
    number: '02',
    title: 'Google Ads Campaigns',
    category: 'Paid Search / Lead Generation',
    tags: ['Search Ads', 'Display Ads', 'YouTube Ads', 'Conversion Optimisation'],
    description: 'Performance-driven Google Ads campaigns across search, display and YouTube formats, focused on lead quality and ROI.',
  },
  {
    id: 'meta-ads',
    number: '03',
    title: 'Meta Ads Campaigns',
    category: 'Paid Social / Lead Generation',
    tags: ['Facebook Ads', 'Instagram Ads', 'Audience Targeting', 'Retargeting'],
    description: 'Targeted Meta advertising campaigns across Facebook and Instagram with creative strategy, audience segmentation and results tracking.',
  },
  {
    id: 'bruno-homes',
    number: '04',
    title: 'Bruno Homes — Digital Marketing',
    category: 'Digital Marketing / Social Media',
    tags: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'AI Automation', 'Social Media'],
    description: 'Full-funnel digital marketing for a real estate brand — paid campaigns, AI chatbot deployment, social content and e-commerce integration.',
  },
]

interface SelectedWorkProps {
  onOpenCase: (id: string) => void
}

export default function SelectedWork({ onOpenCase }: SelectedWorkProps) {
  const { ref, isVisible } = useInView(0.1)

  return (
    <section className="section section--alt" id="work" aria-labelledby="work-heading">
      <div className="container">
        <div className={`fade-up${isVisible ? ' is-visible' : ''}`} ref={ref}>
          <span className="section-label">Work</span>
          <h2 className="section-heading" id="work-heading">Selected Work</h2>
          <div className="section-divider" aria-hidden="true" />
        </div>

        <ul className="work__list" role="list">
          {PROJECTS.map((project, i) => (
            <li key={project.id}>
              <button
                className={`work-item fade-up d${Math.min(i + 1, 4)}${isVisible ? ' is-visible' : ''}`}
                onClick={() => onOpenCase(project.id)}
                aria-label={`View case study: ${project.title}`}
                id={`work-item-${project.id}`}
              >
                <span className="work-item__number" aria-hidden="true">{project.number}</span>

                <div className="work-item__body">
                  <div className="work-item__title">{project.title}</div>
                  <div className="work-item__description">{project.description}</div>
                  <div className="work-item__tags" role="list" aria-label="Tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag" role="listitem">{tag}</span>
                    ))}
                  </div>
                </div>

                <span className="work-item__arrow" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
