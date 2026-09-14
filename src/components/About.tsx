import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, isVisible } = useInView(0.15)

  return (
    <section className="about section section--alt" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about__grid" ref={ref}>
          <div className={`about__label-col fade-up${isVisible ? ' is-visible' : ''}`}>
            <span className="section-label">About</span>
            <h2 className="section-heading" id="about-heading">About Me</h2>
            <div className="section-divider" aria-hidden="true" />
          </div>

          <div className={`about__content fade-up d2${isVisible ? ' is-visible' : ''}`}>
            <p className="about__summary">
              I'm a <strong>Digital Marketing Specialist</strong> with 3+ years of hands-on experience
              across SEO, Google Ads, Meta Ads, website optimisation and analytics. I combine
              search visibility, paid acquisition and data analysis to drive real business growth.
            </p>
            <p className="about__summary">
              I've worked with brands across safety, real estate and e-commerce — running
              campaigns end-to-end from strategy to reporting. I leverage <strong>AI tools</strong> to
              work smarter: automating workflows, enhancing content and reducing manual overhead.
            </p>

            <div className="tag-row" role="list" aria-label="Core skills">
              {['SEO', 'Google Ads', 'Meta Ads', 'Performance Marketing', 'Analytics', 'AI Automation'].map(s => (
                <span className="tag" key={s} role="listitem">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
