import { useState } from 'react'

export default function Nav() {
  const [productsOpen, setProductsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="nav">
        <a href="/" className="nav__logo">
          <img src="/images/logo/nurofin-white.png" alt="Nurofin" />
        </a>

        <ul className="nav__links">
          <li><a href="/" className="nav__link">Home</a></li>
          <li
            className="nav__item--dropdown"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="nav__link nav__dropdown-trigger">
              Products
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ marginLeft: 4 }}>
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {productsOpen && (
              <div className="nav__dropdown">
              <div className="nav__dropdown-inner">
                <a href="/gmdi" className="nav__dropdown-item">
                  <span className="nav__dropdown-title">GMDI</span>
                  <span className="nav__dropdown-sub">Payment Transaction Governance</span>
                </a>
                <div className="nav__dropdown-item nav__dropdown-item--soon">
                  <span className="nav__dropdown-title">LendLogic AI</span>
                  <span className="nav__dropdown-sub">Coming Soon</span>
                </div>
                <div className="nav__dropdown-item nav__dropdown-item--soon">
                  <span className="nav__dropdown-title">RecoveryIQ</span>
                  <span className="nav__dropdown-sub">Coming Soon</span>
                </div>
                <div className="nav__dropdown-item nav__dropdown-item--soon">
                  <span className="nav__dropdown-title">FinSync Advisory</span>
                  <span className="nav__dropdown-sub">Coming Soon</span>
                </div>
              </div>
              </div>
            )}
          </li>
          <li><a href="/about" className="nav__link">The Team</a></li>
        </ul>

        <a href="mailto:vincent@nurofin.com" className="btn-primary nav__cta">
          Contact Us
          <svg className="btn-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        <button
          className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className="nav__mobile-menu">
          <ul className="nav__mobile-links">
            <li><a href="/" className="nav__mobile-link" onClick={closeMenu}>Home</a></li>
            <li>
              <span className="nav__mobile-section">Products</span>
              <div className="nav__mobile-products">
                <a href="/gmdi" className="nav__mobile-product" onClick={closeMenu}>
                  <span className="nav__mobile-product-name">GMDI</span>
                  <span className="nav__mobile-product-sub">Payment Transaction Governance</span>
                </a>
                <div className="nav__mobile-product nav__mobile-product--soon">
                  <span className="nav__mobile-product-name">LendLogic AI</span>
                  <span className="nav__mobile-product-sub">Coming Soon</span>
                </div>
                <div className="nav__mobile-product nav__mobile-product--soon">
                  <span className="nav__mobile-product-name">RecoveryIQ</span>
                  <span className="nav__mobile-product-sub">Coming Soon</span>
                </div>
                <div className="nav__mobile-product nav__mobile-product--soon">
                  <span className="nav__mobile-product-name">FinSync Advisory</span>
                  <span className="nav__mobile-product-sub">Coming Soon</span>
                </div>
              </div>
            </li>
            <li><a href="/about" className="nav__mobile-link" onClick={closeMenu}>The Team</a></li>
          </ul>
          <a href="mailto:vincent@nurofin.com" className="btn-primary nav__mobile-cta" onClick={closeMenu}>
            Contact Us
            <svg className="btn-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      )}
    </>
  )
}
