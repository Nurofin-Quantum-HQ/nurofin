import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

export default function CTASection() {
  const ref = useReveal()

  return (
    <section className="cta-section" ref={ref}>
      <div className="cta-section__bg" aria-hidden="true">
        <img src="/images/cta-bg.png" alt="" />
      </div>
      <div className="cta-section__overlay" aria-hidden="true" />
      <div className="container">
        <div className="cta-section__inner">
          <div className="reveal d1">
            <span className="label label--dark">Get Started</span>
          </div>
          <h2 className="display-l cta-section__headline reveal d2">
            Ready to Govern Your<br />
            <span className="grad-text">Financial Infrastructure?</span>
          </h2>
          <p className="cta-section__sub reveal d3">
            Talk to our team and see how Nurofin can bring precision, speed, and accountability to your financial workflows.
          </p>
          <div className="reveal d4">
            <Link to="/contact" className="btn-primary">
              Contact Us
              <svg className="btn-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
