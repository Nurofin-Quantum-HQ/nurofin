import useReveal from '../hooks/useReveal'

const audiences = [
  { num: '01', title: 'Banks', body: 'Scheduled commercial banks and cooperative banks managing high-volume transaction governance and regulatory compliance.' },
  { num: '02', title: 'NBFCs', body: 'Non-banking financial companies scaling credit operations and collections infrastructure without balance sheet risk.' },
  { num: '03', title: 'Fintechs', body: 'Fast-growing fintechs that need institutional-grade governance without building it from scratch.' },
  { num: '04', title: 'Enterprises', body: 'Large enterprises with complex internal financial workflows, multi-entity payment approvals, and audit requirements.' },
  { num: '05', title: 'Public Sector', body: 'Government-linked financial institutions and agencies requiring programmable, compliant disbursement infrastructure.' },
]

export default function ServeSection() {
  const ref = useReveal()

  return (
    <section className="serve-section" id="serve" ref={ref}>
      <div className="serve-section__bg" aria-hidden="true">
        <img src="/images/institutions.png" alt="" />
      </div>
      <div className="serve-section__overlay" aria-hidden="true" />

      <div className="container serve-section__inner">
        <div className="serve-section__header reveal d1">
          <h2 className="display-l">Serving Institutions Where<br /><span className="grad-text">Precision Matters.</span></h2>
          <p className="serve-section__sub">Built for every layer of the financial ecosystem.</p>
        </div>

        <div className="serve-section__cards">
          {audiences.map((a, i) => (
            <div key={a.title} className={`serve-float-card reveal d${i + 2}`}>
              <span className="serve-float-card__num">{a.num}</span>
              <h3 className="serve-float-card__title">{a.title}</h3>
              <p className="serve-float-card__body">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
