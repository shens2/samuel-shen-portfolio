import { NavLink, Outlet } from 'react-router-dom'
import socialLinkedin from '../assets/images/social-linkedin.svg'
import socialEmail from '../assets/images/social-email.svg'
import '../App.css'

function navLinkClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'nav-item nav-item--current' : 'nav-item'
}

function Layout() {
  return (
    <div className="page">
      <header className="nav-header">
        <nav className="nav">
          <NavLink to="/" end className={navLinkClass} data-label="9-5">
            9-5
          </NavLink>
          <NavLink to="/about" className={navLinkClass} data-label="About">
            About
          </NavLink>
          <NavLink to="/5-9" className={navLinkClass} data-label="5-9">
            5-9
          </NavLink>
        </nav>
      </header>

      <Outlet />

      <footer className="footer">
        <div className="footer-text">
          <p>© 2025 Samuel Shen. Images © Samuel Shen &amp; respective companies</p>
          <p className="footer-text--muted">Handcrafted with Figma</p>
        </div>
        <nav className="social-links">
          <a href="https://www.linkedin.com/in/shensamuel/" target="_blank" rel="noreferrer">
            <img src={socialLinkedin} alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="mailto:sshen6572@gmail.com">
            <img src={socialEmail} alt="Email" width={24} height={24} />
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default Layout
