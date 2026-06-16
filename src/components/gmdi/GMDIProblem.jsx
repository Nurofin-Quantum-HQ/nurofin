import useReveal from '../../hooks/useReveal'

const problems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: 'Approvals by Email',
    body: 'Every transaction exception lands in someone\'s inbox. Approvals wait on out-of-office replies, forwarded threads, and forgotten follow-ups.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Excel Rebuilds Every Quarter',
    body: 'Governance rules live in spreadsheets that break when people leave. Every policy change means rebuilding formulas, re-validating logic, and hoping nothing breaks in prod.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Leadership Bottlenecks',
    body: 'Routine decisions escalate to executives because there\'s no trusted system below them. Senior time is consumed by decisions that should be automated.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4M12 16h.01"/>
      </svg>
    ),
    title: 'No Audit Trail',
    body: 'When a regulator asks why a payment was approved, no one can answer. The evidence is scattered across emails, chats, and someone\'s personal drive.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Zero Scalability',
    body: 'Manual governance doesn\'t scale. As volumes grow, exceptions multiply. The team that handled 1,000 transactions can\'t handle 100,000 — not without breaking.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: 'Fragmented Systems',
    body: 'Banks use one core, NBFCs another, fintechs a third. Each speaks a different language. There\'s no unified governance layer that works across all of them.',
  },
]

export default function GMDIProblem() {
  const ref = useReveal()

  return (
    <section className="section gmdi-problem" ref={ref}>
      <div className="container">
        <div className="gmdi-section__header reveal d1">
          <span className="label">The Problem</span>
          <h2 className="display-l">
            The Way Financial Institutions<br />
            <span className="grad-text">Govern Payments Is Broken</span>
          </h2>
          <p className="gmdi-section__sub reveal d2">
            Across banks, NBFCs, and fintechs — the same six failure modes repeat themselves. GMDI was built to replace all of them.
          </p>
        </div>

        <div className="problem__grid">
          {problems.map((p, i) => (
            <div key={i} className={`problem-card reveal d${Math.min(i + 2, 6)}`}>
              <div className="problem-card__icon">{p.icon}</div>
              <h3 className="problem-card__title">{p.title}</h3>
              <p className="problem-card__body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
