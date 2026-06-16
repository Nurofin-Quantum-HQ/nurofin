import useReveal from '../hooks/useReveal'

const capabilities = [
  {
    title: 'Rule-Based Decision Engines',
    body: 'Define complex, multi-condition logic without writing code. Your institution sets the rules — Nurofin enforces them at scale, automatically.',
  },
  {
    title: 'Behavioral Risk Scoring',
    body: 'Go beyond static bureau data. Continuous behavioral signals assess creditworthiness in real time, enabling more inclusive and accurate lending decisions.',
  },
  {
    title: 'Predictive Collections Intelligence',
    body: 'Identify at-risk accounts before they default. AI-driven timing and channel logic maximise recovery rates while reducing friction and cost.',
  },
  {
    title: 'Explainable AI, Always',
    body: 'Every AI output is transparent and traceable. When regulators ask why a decision was made, your team has a clear, auditable answer — never a black box.',
  },
]

export default function AICapabilities() {
  const ref = useReveal()

  return (
    <section className="section light-section" id="ai-capabilities" ref={ref}>
      <div className="container">
        <div className="aicap__header reveal d1">
          <h2 className="display-l">AI Intelligence That Runs With You,<br />Not Ahead of You.</h2>
          <p className="aicap__sub">
            Nurofin's AI layer doesn't replace your institution's judgment — it sharpens it. Every recommendation is grounded in your policies, your data, and your risk appetite.
          </p>
        </div>

        <div className="aicap__bento">
          <div className="aicap__image-cell reveal d2">
            <img src="/images/ai-intelligence.png" alt="AI Intelligence" className="aicap__image" />
            <div className="aicap__image-overlay" aria-hidden="true" />
          </div>
          <div className="aicap__cards">
            {capabilities.map((c, i) => (
              <div key={c.title} className={`aicap-card reveal d${i + 3}`}>
                <h3 className="aicap-card__title">{c.title}</h3>
                <p className="aicap-card__body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
