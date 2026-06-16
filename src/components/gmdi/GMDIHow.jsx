import useReveal from '../../hooks/useReveal'

const steps = [
  {
    num: '01',
    title: 'Define Your Rules',
    sub: 'Voice-first or type — your choice',
    body: 'Set payment governance rules in plain language. You don\'t even have to type — just speak. GMDI converts your policy into live executable logic instantly.',
    highlight: '"Approve all vendor payments under ₹5L automatically. Flag anything above."',
  },
  {
    num: '02',
    title: 'Automate the Workflow',
    sub: 'Replace email chains with logic',
    body: 'Once rules are set, GMDI routes every transaction automatically. The right approver sees the right request at the right time — no chasing, no delays.',
    highlight: null,
  },
  {
    num: '03',
    title: 'Govern with Maker-Checker',
    sub: 'Four-eye principle, built in',
    body: 'Every transaction flows through a structured maker-checker process. Dual controls are enforced by the system — not by manual discipline or hope.',
    highlight: null,
  },
  {
    num: '04',
    title: 'Execute with Confidence',
    sub: 'Full audit trail, zero gaps',
    body: 'Every decision is logged, timestamped, and attributed. When a regulator asks why a payment was approved, you have a complete, immutable answer in seconds.',
    highlight: null,
  },
]

export default function GMDIHow() {
  const ref = useReveal()

  return (
    <section className="section gmdi-how light-section" id="how" ref={ref}>
      <div className="container">
        <div className="gmdi-section__header reveal d1">
          <span className="label">Introducing GMDI</span>
          <h2 className="display-l">
            One Platform That Fixes<br />
            <span className="grad-text">All of It.</span>
          </h2>
          <p className="gmdi-section__sub reveal d2">
            GMDI is a programmable governance layer that sits across your entire payment stack — replacing every broken workaround with a single, intelligent system.
          </p>
        </div>

        <div className="how__steps">
          {steps.map((step, i) => (
            <div key={i} className={`how-step reveal d${Math.min(i + 2, 6)}`}>
              <div className="how-step__num">{step.num}</div>
              <div className="how-step__content">
                <div className="how-step__meta">{step.sub}</div>
                <h3 className="how-step__title">{step.title}</h3>
                <p className="how-step__body">{step.body}</p>
                {step.highlight && (
                  <blockquote className="how-step__quote">{step.highlight}</blockquote>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
