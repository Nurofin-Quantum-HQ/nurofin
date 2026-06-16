import { useState } from 'react'
import useReveal from '../../hooks/useReveal'

const capabilities = [
  {
    id: 'voice',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
    label: 'Voice-First Rules',
    title: 'Set Policy by Speaking',
    body: 'Define governance rules in plain language — spoken or typed. GMDI\'s AI engine parses your intent and converts it into live executable payment logic without any coding.',
    detail: 'Supports English, Hindi, and regional languages. Rules are version-controlled and can be modified or rolled back at any time.',
  },
  {
    id: 'maker-checker',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <polyline points="16 11 18 13 22 9"/>
      </svg>
    ),
    label: 'Maker-Checker',
    title: 'Dual Control, System-Enforced',
    body: 'Every transaction that meets your configured threshold goes through a structured four-eye review. The system enforces it — no manual discipline required.',
    detail: 'Configurable thresholds per transaction type, business unit, or counterparty. Escalation paths defined in advance.',
  },
  {
    id: 'audit',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    label: 'Audit Trail',
    title: 'Immutable Decision Log',
    body: 'Every approval, rejection, and escalation is logged with full context — who acted, when, why, and what rule applied. Built for regulatory scrutiny from day one.',
    detail: 'Tamper-proof ledger. Exportable for RBI, SEBI, or internal compliance reviews. Searchable by transaction, user, or time window.',
  },
  {
    id: 'dashboard',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    label: 'AI Dashboard',
    title: 'Governance Intelligence',
    body: 'Real-time visibility across all payment flows. AI surfaces anomalies, bottlenecks, and exceptions before they become problems — not after.',
    detail: 'Role-based views for operations, finance, compliance, and leadership. Live metrics with configurable alert thresholds.',
  },
  {
    id: 'multilang',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    label: 'Multi-Language AI',
    title: 'India-Native Intelligence',
    body: 'Built on proprietary financial data from India\'s markets. The AI understands local regulatory context, banking norms, and the languages your team actually uses.',
    detail: 'Trained on Indian financial transaction patterns. Compliance logic aligned to RBI and SEBI frameworks out of the box.',
  },
]

export default function GMDICapabilities() {
  const [active, setActive] = useState(0)
  const ref = useReveal()
  const cap = capabilities[active]

  return (
    <section className="section gmdi-caps light-section" ref={ref}>
      <div className="container">
        <div className="gmdi-section__header reveal d1">
          <span className="label">Capabilities</span>
          <h2 className="display-l">
            Everything You Need to<br />
            <span className="grad-text">Govern at Scale</span>
          </h2>
          <p className="gmdi-section__sub reveal d2">
            Five core capabilities. One unified platform. No stitching required.
          </p>
        </div>

        <div className="caps__layout reveal d3">
          {/* Tab list */}
          <div className="caps__tabs">
            {capabilities.map((c, i) => (
              <button
                key={c.id}
                className={`caps__tab${active === i ? ' caps__tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="caps__tab-icon">{c.icon}</span>
                <span className="caps__tab-label">{c.label}</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="caps__panel" key={active}>
            <span className="label">{cap.label}</span>
            <h3 className="caps__panel-title">{cap.title}</h3>
            <p className="caps__panel-body">{cap.body}</p>
            <p className="caps__panel-detail">{cap.detail}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
