export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {currentYear} Shiva Gokari · Digital Marketing Specialist
        </p>
        <nav className="footer__links" aria-label="Footer links">
          <a
            href="mailto:gskr070@gmail.com"
            className="footer__link"
            aria-label="Send email"
          >
            gskr070@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/shivagokari/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            LinkedIn
          </a>
          <a
            href="https://ynmsafety.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="YNM Safety website (opens in new tab)"
          >
            YNM Safety
          </a>
        </nav>
      </div>
    </footer>
  )
}
