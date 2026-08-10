import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, isVisible } = useInView()

  return (
    <section className="about section" id="about" ref={ref}>
      <div className={`container ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <h2 className="section__title">About Me</h2>
        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a <strong>Dynamic Digital Marketing &amp; Social Media Manager</strong> based in
              Hyderabad with over 3 years of hands-on experience in creating data-driven campaigns
              that deliver real results.
            </p>
            <p>
              I specialize in leveraging <strong>AI tools</strong> like ChatGPT, Meta Ads AI, and
              Google Ads AI to craft creative strategies, optimize performance, and drive measurable
              business growth. From SEO and social media marketing to PPC and content automation,
              I bring a comprehensive approach to every project.
            </p>
            <p>
              I'm passionate about combining <strong>AI innovation with digital marketing</strong> to
              help brands build a stronger online presence, boost engagement, and convert audiences
              into loyal customers.
            </p>
          </div>
          <div className="about__highlights">
            <div className="about__card">
              <div className="about__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
              </div>
              <h3>SEO & Analytics</h3>
              <p>Website optimization, keyword research, and data-driven decision making with Google Analytics</p>
            </div>
            <div className="about__card">
              <div className="about__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Social Media</h3>
              <p>Strategic content creation, community management, and influencer marketing across all platforms</p>
            </div>
            <div className="about__card">
              <div className="about__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 10-5.12 5.12-2.12-2.12"/></svg>
              </div>
              <h3>Paid Advertising</h3>
              <p>Google Ads, Meta Ads, and LinkedIn Ads campaigns with targeted audience reach and ROI optimization</p>
            </div>
            <div className="about__card">
              <div className="about__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/><path d="M9.5 18.5 12 22l2.5-3.5"/><path d="M6 12a6 6 0 0 0 12 0"/></svg>
              </div>
              <h3>AI-Powered Marketing</h3>
              <p>Leveraging ChatGPT, ManyChat, and AI analytics to automate and optimize marketing workflows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
