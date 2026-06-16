import { useState } from 'react'
import useReveal from '../../hooks/useReveal'

const layers = [
  {
    id: 'input',
    label: 'Input Layer',
    color: '#67C8FF',
    nodes: ['Banks', 'NBFCs', 'Fintechs', 'Payment Gateways'],
    description: 'GMDI connects to your existing financial infrastructure — banks, NBFCs, fintechs, and payment gateways — without requiring system replacement.',
  },
  {
    id: 'rules',
    label: 'Rules Engine',
    color: '#B137FF',
    nodes: ['Voice Rules', 'Policy Config', 'Threshold Logic', 'Escalation Paths'],
    description: 'The programmable rules engine converts your governance policies into executable logic. Define rules by voice or text — the engine handles the rest.',
  },
  {
    id: 'workflow',
    label: 'Workflow Orchestration',
    color: '#173EEA',
    nodes: ['Maker-Checker', 'Auto-Routing', 'Approvals', 'Notifications'],
    description: 'Every transaction is routed through the correct approval workflow automatically. Maker-checker, escalations, and notifications run without manual intervention.',
  },
  {
    id: 'intelligence',
    label: 'AI Intelligence',
    color: '#B137FF',
    nodes: ['Anomaly Detection', 'Risk Scoring', 'Pattern Analysis', 'Multi-Language NLP'],
    description: 'Trained on Indian financial data, the AI layer surfaces anomalies, scores risk, and understands governance intent in English, Hindi, and regional languages.',
  },
  {
    id: 'audit',
    label: 'Audit & Compliance',
    color: '#67C8FF',
    nodes: ['Immutable Ledger', 'Regulatory Export', 'Decision Log', 'Timestamps'],
    description: 'Every decision is logged in an immutable, timestamped audit trail — ready for RBI, SEBI, or internal compliance review at any time.',
  },
]

export default function GMDIArchitecture() {
  const [activeLayer, setActiveLayer] = useState(0)
  const ref = useReveal()
  const selected = activeLayer !== null ? layers[activeLayer] : null

  return (
    <section className="section gmdi-arch light-section" ref={ref}>
      <div className="container">
        <div className="gmdi-section__header reveal d1">
          <span className="label">Architecture</span>
          <h2 className="display-l">
            Built as a Decision Layer,<br />
            <span className="grad-text">Not Another System to Manage</span>
          </h2>
          <p className="gmdi-section__sub reveal d2">
            GMDI sits between your transaction sources and execution systems. Click a layer to explore.
          </p>
        </div>

        <div className="arch__layout reveal d3">
          {/* Interactive layer stack */}
          <div className="arch__stack">
            {layers.map((layer, i) => (
              <button
                key={layer.id}
                className={`arch__layer${activeLayer === i ? ' arch__layer--active' : ''}`}
                style={{ '--layer-color': layer.color }}
                onClick={() => setActiveLayer(activeLayer === i ? null : i)}
              >
                <span className="arch__layer-num">0{i + 1}</span>
                <span className="arch__layer-label">{layer.label}</span>
                <div className="arch__layer-nodes">
                  {layer.nodes.map((n, j) => (
                    <span key={j} className="arch__node">{n}</span>
                  ))}
                </div>
                <svg className="arch__layer-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="arch__detail">
            {selected ? (
              <div className="arch__detail-inner" key={activeLayer}>
                <div className="arch__detail-badge" style={{ color: selected.color, borderColor: selected.color + '40' }}>
                  {selected.label}
                </div>
                <h3 className="arch__detail-title">{selected.label}</h3>
                <p className="arch__detail-body">{selected.description}</p>
                <div className="arch__detail-nodes">
                  {selected.nodes.map((n, i) => (
                    <div key={i} className="arch__detail-node" style={{ '--node-color': selected.color }}>
                      <span className="arch__detail-node-dot" />
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="arch__detail-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.25 }}>
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4M12 16h.01"/>
                </svg>
                <p>Select a layer to explore the architecture</p>
              </div>
            )}
          </div>
        </div>

        {/* Architecture image reference */}
        <div className="arch__diagram reveal d4">
          <img src="/images/gmdi-architecture.png" alt="GMDI Architecture Diagram" className="arch__diagram-img" />
          <div className="arch__diagram-overlay" />
        </div>
      </div>
    </section>
  )
}
