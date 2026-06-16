import useReveal from '../../hooks/useReveal'

export default function GMDIAIFeatures() {
  const ref = useReveal()

  return (
    <section className="section gmdi-ai" ref={ref}>
      <div className="gmdi-ai__glow" aria-hidden="true" />
      <div className="container">

        <div className="gmdi-section__header reveal d1">
          <span className="label">AI-Powered</span>
          <h2 className="display-l">
            The Intelligence That Makes<br />
            <span className="grad-text">Governance Effortless</span>
          </h2>
          <p className="gmdi-section__sub reveal d2">
            GMDI runs on its own proprietary AI — not a third-party model. Your data stays yours: never shared, never used to train anyone else's system.
          </p>
        </div>

        <div className="ai__bento reveal d3">

          {/* Large feature: Voice */}
          <div className="ai-card ai-card--voice">
            <div className="ai-card__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
            </div>
            <h3 className="ai-card__title">You Don't Even Have to Type.<br />Just Speak.</h3>
            <p className="ai-card__body">Define governance rules in plain language — spoken or typed. GMDI's natural language engine converts your policy intent into live, executable logic. No developer. No configuration file. No delay.</p>
            <div className="ai-card__quote">"Approve all vendor payments under ₹5L automatically. Flag anything above for CFO review."</div>
          </div>

          {/* Data security */}
          <div className="ai-card ai-card--india">
            <div className="ai-card__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 className="ai-card__title">Your Data Never Leaves</h3>
            <p className="ai-card__body">GMDI's AI is proprietary — not built on a shared model. Your transaction data is never used to train external systems, never exposed to other clients, and never shared with third parties.</p>
          </div>

          {/* Multi-language */}
          <div className="ai-card">
            <div className="ai-card__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 8l6 6"/>
                <path d="M4 14l6-6 2-3"/>
                <path d="M2 5h12"/>
                <path d="M7 2h1"/>
                <path d="M22 22l-5-10-5 10"/>
                <path d="M14 18h6"/>
              </svg>
            </div>
            <h3 className="ai-card__title">Multi-Language AI</h3>
            <p className="ai-card__body">Set rules and review transactions in English, Hindi, or regional languages. Governance that works the way your team works.</p>
          </div>

          {/* Anomaly detection */}
          <div className="ai-card">
            <div className="ai-card__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3 className="ai-card__title">Anomaly Detection</h3>
            <p className="ai-card__body">AI surfaces unusual patterns, duplicate entries, and high-risk transactions before they escalate — not after the damage is done.</p>
          </div>

          {/* Real-time dashboard */}
          <div className="ai-card">
            <div className="ai-card__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </div>
            <h3 className="ai-card__title">Real-Time Intelligence</h3>
            <p className="ai-card__body">A live AI dashboard that gives operations, finance, and compliance teams a single view of every payment decision as it happens.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
