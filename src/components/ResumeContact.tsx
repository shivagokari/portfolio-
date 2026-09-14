import { useInView } from '../hooks/useInView'

export default function ResumeContact() {
  const { ref, isVisible } = useInView(0.2)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/shiva-gokari-resume.pdf'
    link.download = 'Shiva-Gokari-Resume.pdf'
    link.click()
  }

  const handleEmail = () => {
    window.location.href = 'mailto:gskr070@gmail.com?subject=Digital Marketing Opportunity'
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/918142825267?text=Hi%20Shiva%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect.', '_blank', 'noopener noreferrer')
  }

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/shivagokari/', '_blank', 'noopener noreferrer')
  }

  return (
    <section className="section section--alt resume-contact" id="contact" aria-labelledby="contact-heading">
      <div
        className={`container fade-in-up${isVisible ? ' is-visible' : ''}`}
        ref={ref}
      >
        <span className="resume-contact__eyebrow">Let's Connect</span>
        <h2 className="resume-contact__heading" id="contact-heading">
          Open to New Opportunities
        </h2>
        <p className="resume-contact__subtext">
          I'm currently open to Digital Marketing, SEO and Performance Marketing roles.
          Download my resume or reach out directly.
        </p>

        <div className="resume-contact__actions">
          {/* Primary */}
          <button
            className="btn btn--primary"
            onClick={handleDownload}
            id="contact-download-resume-btn"
            aria-label="Download Shiva Gokari's resume"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </button>

          {/* Email */}
          <button
            className="btn btn--secondary"
            onClick={handleEmail}
            id="contact-email-btn"
            aria-label="Send email to Shiva Gokari"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email
          </button>

          {/* WhatsApp */}
          <button
            className="btn btn--secondary"
            onClick={handleWhatsApp}
            id="contact-whatsapp-btn"
            aria-label="Contact via WhatsApp"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            WhatsApp
          </button>

          {/* LinkedIn */}
          <button
            className="btn btn--secondary"
            onClick={handleLinkedIn}
            id="contact-linkedin-btn"
            aria-label="View LinkedIn profile"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  )
}
