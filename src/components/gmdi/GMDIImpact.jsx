import useReveal from '../../hooks/useReveal'

const stats = [
  {
    value: '60%',
    label: 'Reduction in approval cycle time',
    body: 'Transactions that took days through email chains now resolve in hours — automatically routed, tracked, and closed.',
  },
  {
    value: '100%',
    label: 'Audit coverage on every transaction',
    body: 'No gaps. Every decision is logged, attributed, and immutable. Full regulatory readiness from day one.',
  },
  {
    value: '85%',
    label: 'Drop in escalations to senior leadership',
    body: 'Routine approvals are handled by the system. Leaders focus on strategy, not transaction sign-offs.',
  },
  {
    value: 'Zero',
    label: 'Dependency on Excel for governance',
    body: 'Rules live in the platform, not spreadsheets. No more policy drift, formula errors, or knowledge loss when someone leaves.',
  },
]

export default function GMDIImpact() {
  const ref = useReveal()

  return (
    <section className="section gmdi-impact light-section" ref={ref}>
      <div className="gmdi-impact__glow" aria-hidden="true" />
      <div className="container">
        <div className="gmdi-section__header gmdi-section__header--center reveal d1">
          <span className="label">Measurable Impact</span>
          <h2 className="display-l">
            Fast. Clean.<br />
            <span className="grad-text">Transparent Financial Journeys.</span>
          </h2>
          <p className="gmdi-section__sub gmdi-section__sub--center reveal d2">
            What GMDI delivers from the moment it goes live.
          </p>
        </div>

        <div className="impact__grid">
          {stats.map((s, i) => (
            <div key={i} className={`impact-card reveal d${Math.min(i + 2, 6)}`}>
              <div className="impact-card__value grad-text">{s.value}</div>
              <div className="impact-card__label">{s.label}</div>
              <p className="impact-card__body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
