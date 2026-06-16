import useReveal from '../hooks/useReveal'

const differentiators = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#67C8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'You Own Every Decision',
    body: 'Nurofin is not a black box. Every rule, threshold, and approval path is defined and controlled by your institution. Full transparency — no algorithmic opacity.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#67C8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
      </svg>
    ),
    title: 'Adopt One Module or All Four',
    body: 'Each product in the Nurofin platform is independently deployable. Start with what you need today — and expand as your infrastructure matures.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#67C8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Audit-Ready by Design',
    body: 'Every AI-driven recommendation is traceable and explainable. When regulators ask, your team has answers — not assumptions.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#67C8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    title: 'End-to-End, Not Point Solutions',
    body: 'Nurofin maps to the full financial workflow — from transaction authorisation to credit decisioning to collections recovery. Not stitched-together tools. A coherent system.',
  },
]

export default function WhySection() {
  const ref = useReveal()

  return (
    <section className="section" id="why" ref={ref}>
      <div className="container">
        <div className="why__header reveal d1">
          <h2 className="display-l">Built for Institutions That<br />Demand Accountability.</h2>
        </div>

        <div className="why__grid">
          {differentiators.map((d, i) => (
            <div key={d.title} className={`why-card reveal d${i + 2}`}>
              <div className="why-card__icon">{d.icon}</div>
              <h3 className="why-card__title">{d.title}</h3>
              <p className="why-card__body">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
