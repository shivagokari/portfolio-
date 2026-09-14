import { useInView } from '../hooks/useInView'

const CORE_SKILLS = ['SEO', 'Google Ads', 'Meta Ads', 'Analytics', 'Performance Marketing']

export default function About() {
  const { ref, isVisible } = useInView(0.15)

  return (
    <section className="about section section--alt" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about__grid" ref={ref}>
          {/* Left column */}
          <div className={`about__label-col fade-in-up${isVisible ? ' is-visible' : ''}`}>
            <span className="section-label">About</span>
            <h2 className="section-heading" id="about-heading">About Me</h2>
            <div className="section-divider" aria-hidden="true" />
          </div>

          {/* Right column */}
          <div className={`about__content fade-in-up fade-delay-2${isVisible ? ' is-visible' : ''}`}>
            <p className="about__summary">
              I'm a <strong>Digital Marketing Specialist</strong> with 3+ years of hands-on experience
              across SEO, Google Ads, Meta Ads, website optimisation and analytics. My work combines
              search visibility, paid acquisition and data analysis to improve digital performance for
              real businesses.
            </p>
            <p className="about__summary">
              I've worked with brands across safety equipment, real estate and e-commerce—running
              campaigns end-to-end from strategy and creative to execution, reporting and optimisation.
              I leverage <strong>AI tools</strong> to work smarter: automating workflows, enhancing
              content quality and reducing manual overhead.
            </p>

            {/* Skill tags */}
            <div className="tag-row" role="list" aria-label="Core skills">
              {CORE_SKILLS.map(skill => (
                <span className="tag" key={skill} role="listitem">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
