import { useInView } from '../hooks/useInView'

const websites = [
  { 
    name: 'Lokael Dental', 
    url: 'https://lokael.netlify.app/', 
    desc: 'Modern dental clinic website with online booking & local healthcare SEO', 
    logo: '/lokael-logo.png' 
  },
  { 
    name: 'Brunohomes Interiors', 
    url: 'https://brunoh.netlify.app/', 
    desc: 'Premium interior design & modular living solutions website in Hyderabad', 
    logo: '/brunoh-logo.jpg' 
  },
  { 
    name: 'Drishti Eye Hospital', 
    url: 'https://drishtieyecarekp.netlify.app/', 
    desc: 'Super speciality eye care hospital website with patient portal & SEO', 
    logo: '/drishti-logo.svg' 
  },
  { 
    name: 'Help Riders', 
    url: 'https://helpriderss.vercel.app/', 
    desc: 'Interactive biker companion app with real-time route assistance & map tools', 
    logo: '/helpriders-logo.svg' 
  },
  { 
    name: 'YNM Safety', 
    url: 'https://ynmsafety.com', 
    desc: 'Safety equipment company website', 
    logo: '/ynm-safety-logo.png' 
  },
  { 
    name: 'Grow With Shiva', 
    url: 'https://growwithshiva.in/', 
    desc: 'Personal digital marketing brand website', 
    logo: '/growwithshiva-logo.png' 
  },
  { 
    name: 'Bruno Homes', 
    url: 'https://brunohomes.in', 
    desc: 'Electric & home appliances brand website', 
    logo: '/brunohomes-logo.png' 
  },
  { 
    name: 'Prismire', 
    url: 'https://www.prismire.com/', 
    desc: 'Overseas consultancy website', 
    logo: '/prismire-logo.png' 
  },
]

const instagramPages = [
  { name: 'YNM Safety', url: 'https://www.instagram.com/ynm.safety/' },
  { name: 'Paradise Lounge Frisco', url: 'https://www.instagram.com/paradiseloungefrisco/' },
  { name: 'Paradise Frisco', url: 'https://www.instagram.com/paradise.frisco/' },
  { name: 'The One Jubilee', url: 'https://www.instagram.com/theonejubilee/' },
  { name: 'Grand Hyderabad', url: 'https://www.instagram.com/grand.hyderabad/' },
  { name: 'Wirally', url: 'https://www.instagram.com/wirally/' },
  { name: 'Bruno Homes', url: 'https://www.instagram.com/brunohomes.in/' },
  { name: 'Prismire Pvt Ltd', url: 'https://www.instagram.com/prismirepvtltd/' },
  { name: 'Inspecon Pvt Ltd', url: 'https://www.instagram.com/inspeconpvtltd/' },
  { name: 'Snad Developers', url: 'https://www.instagram.com/snaddevelopers/' },
  { name: 'Chitra Kalakar', url: 'https://www.instagram.com/chitrakalakar14/' },
  { name: 'Chai Shots', url: 'https://www.instagram.com/chaishotsapp/' },
]

const linkedinPages = [
  { name: 'Prismire Overseas', url: 'https://www.linkedin.com/company/prismire-overseass/' },
  { name: 'Prismire Pvt Ltd', url: 'https://www.linkedin.com/company/prismire-private-limited/' },
  { name: 'Inspecon Pvt Ltd', url: 'https://www.linkedin.com/company/inspecon-pvt-ltd/' },
  { name: 'YNM Safety', url: 'https://www.linkedin.com/company/ynmsafety' },
]

export default function Portfolio() {
  const { ref, isVisible } = useInView()

  return (
    <section className="portfolio section" id="works" ref={ref}>
      <span id="portfolio" style={{ position: 'absolute', top: '-80px' }} />
      <div className={`container ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <h2 className="section__title">Works</h2>

        <div className="portfolio__section">
          <h3 className="portfolio__subtitle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            Websites Designed & SEO Managed
          </h3>
          <div className="portfolio__grid">
            {websites.map((site, i) => (
              <a href={site.url} target="_blank" rel="noopener noreferrer" className="portfolio__card portfolio__card--website" key={i}>
                <div className="portfolio__card-header">
                  <span className="portfolio__card-dot" />
                  <span className="portfolio__card-dot" />
                  <span className="portfolio__card-dot" />
                </div>
                <div className="portfolio__card-body">
                  <div className="portfolio__card-title">
                    {site.logo && <img src={site.logo} alt={`${site.name} logo`} className="portfolio__card-logo" />}
                    <h4>{site.name}</h4>
                  </div>
                  <p>{site.desc}</p>
                  <span className="portfolio__card-link">
                    Visit Site
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="portfolio__section">
          <h3 className="portfolio__subtitle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 22 22 22"/><circle cx="12" cy="13" r="5"/></svg>
            Social Media & LinkedIn Pages Managed
          </h3>
          <div className="portfolio__social-container">
            {/* Instagram Pages first */}
            <div className="portfolio__social-group">
              <h4 className="portfolio__social-subheading">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                Instagram Pages Managed
              </h4>
              <div className="portfolio__tags">
                {instagramPages.map((page, i) => (
                  <a href={page.url} target="_blank" rel="noopener noreferrer" className="portfolio__tag portfolio__tag--instagram" key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    <span className="portfolio__tag-name">{page.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* LinkedIn Pages second */}
            <div className="portfolio__social-group">
              <h4 className="portfolio__social-subheading">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn Pages Managed
              </h4>
              <div className="portfolio__tags">
                {linkedinPages.map((page, i) => (
                  <a href={page.url} target="_blank" rel="noopener noreferrer" className="portfolio__tag portfolio__tag--linkedin" key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    <span className="portfolio__tag-name">{page.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
