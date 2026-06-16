import useReveal from '../../hooks/useReveal'

export default function GMDICTA() {
  const ref = useReveal()

  return (
    <section className="cta-section gmdi-cta" ref={ref}>
      <div className="cta-section__glow" aria-hidden="true" />
      <div className="gmdi-cta__glow" aria-hidden="true" />
      <div className="container">
        <div className="cta-section__inner">
          <div className="reveal d1">
            <span className="label">Get Started</span>
          </div>
          <h2 className="display-l reveal d2">
            Ready to Stop Governing<br />
            <span className="grad-text">Manually?</span>
          </h2>
          <p className="cta-section__sub reveal d3">
            GMDI is live and deployed across financial institutions in India. See how it fits your payment stack in a 30-minute demo.
          </p>
          <div className="hero__ctas reveal d4">
            <a href="mailto:vincent@nurofin.com" className="btn-primary">
              Contact Us
              <svg className="btn-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="gmdi-cta__tagline reveal d5">
            Fast. Clean. Transparent financial journeys.
          </div>
        </div>
      </div>
    </section>
  )
}
