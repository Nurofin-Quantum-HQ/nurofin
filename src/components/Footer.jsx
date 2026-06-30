import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/images/logo/nurofin-icon.png" alt="Nurofin" className="footer__logo-icon" />
            </div>
          </div>
          <div className="footer__links">
            <div className="footer__col">
              <span className="footer__col-title">Products</span>
              <a href="/gmdi">GMDI</a>
              <a href="/buildtrack">Build Track</a>
              <a href="#">LendLogic AI</a>
              <a href="#">RecoveryIQ</a>
              <a href="#">FinSync Advisory</a>
            </div>
            <div className="footer__col">
              <span className="footer__col-title">Terms & Conditions</span>

              <Link to="/privacy-policy">
                Privacy Policy
              </Link>

              <Link to="/terms-and-conditions">
                Terms & Conditions
              </Link>

              <Link to="/refund-policy">
                Refund Policy
              </Link>
            </div>
            <div className="footer__col">
              <span className="footer__col-title">Contact Us</span>
              <a href="mailto:vincent@nurofin.com">vincent@nurofin.com</a>
              <a href="#">Request a Demo</a>
              <span className="footer__address">
                68, Neralu,<br />
                Cybele Green Phase 2,<br />
                4th Cross,<br />
                Margondanahalli,<br />
                Bangalore - 560036
              </span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__legal">© 2026 NUROFIN Quantum Flux LLP. All rights reserved.</p>
          <div className="footer__email">
            <a href="mailto:vincent@nurofin.com">vincent@nurofin.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
