export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer__inner">
        <p className="footer__copy">© {year} Shiva Gokari · Digital Marketing Specialist · Hyderabad</p>
        <nav className="footer__links" aria-label="Footer links">
          <a href="mailto:gskr070@gmail.com" className="footer__link">Email</a>
          <a href="https://www.linkedin.com/in/shivagokari/" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
          <a href="https://wa.me/918142825267" target="_blank" rel="noopener noreferrer" className="footer__link">WhatsApp</a>
        </nav>
      </div>
    </footer>
  )
}
