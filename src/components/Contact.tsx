import { useInView } from '../hooks/useInView'

export default function Contact() {
  const { ref, isVisible } = useInView()

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className={`container ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <h2 className="section__title">Get In Touch</h2>
        <p className="contact__intro">
          Ready to boost your brand's digital presence? Let's connect and create something amazing together.
        </p>
        <div className="contact__grid">
          <a href="mailto:gskr070@gmail.com" className="contact__card">
            <div className="contact__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <h3>Email</h3>
            <p>gskr070@gmail.com</p>
          </a>
          <a href="tel:+918142825267" className="contact__card">
            <div className="contact__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <h3>Phone</h3>
            <p>+91 8142825267</p>
          </a>
          <a href="https://www.linkedin.com/in/shiva-g-97b251276" target="_blank" rel="noopener noreferrer" className="contact__card">
            <div className="contact__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </div>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </a>
          <a href="https://growwithshiva.in/" target="_blank" rel="noopener noreferrer" className="contact__card">
            <div className="contact__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3>Website</h3>
            <p>growwithshiva.in</p>
          </a>
          <a href="https://meet.google.com/" target="_blank" rel="noopener noreferrer" className="contact__card">
            <div className="contact__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
            </div>
            <h3>Google Meet</h3>
            <p>Schedule Meet</p>
          </a>
        </div>
      </div>
    </section>
  )
}
