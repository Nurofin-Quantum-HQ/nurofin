import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg" aria-hidden="true">
        <img src="/images/hero/hero-bg.png" alt="" />
      </div>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <div className="fade-up" style={{ animationDelay: '0.05s' }}>
          <span className="label">AI-Powered Financial Intelligence</span>
        </div>
        <h1 className="display-xl hero__headline fade-up" style={{ animationDelay: '0.15s' }}>
          The Intelligence Layer for<br />
          <span className="grad-text">Modern Financial Services.</span>
        </h1>
        <p className="hero__sub fade-up" style={{ animationDelay: '0.28s' }}>
          Nurofin builds AI-powered platforms that help banks, NBFCs, and fintechs make faster, smarter, more accountable decisions — across transactions, credit, and collections. You stay in control. We power the intelligence.
        </p>
        <div className="hero__ctas fade-up" style={{ animationDelay: '0.40s' }}>
          <Link to="/contact" className="btn-primary">
            Contact Us
            <svg className="btn-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a href="#products" className="btn-ghost">
            Explore the platform
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
