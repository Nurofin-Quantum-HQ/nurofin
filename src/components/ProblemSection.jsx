import useReveal from '../hooks/useReveal'

const problems = [
  {
    num: '01',
    title: 'Manual, Error-Prone Workflows',
    body: 'Payment authorisations, credit reviews, and collections are still driven by spreadsheets and human bottlenecks — slow, opaque, and impossible to audit at scale.',
  },
  {
    num: '02',
    title: 'Fragmented Decision Infrastructure',
    body: 'Teams operate disconnected tools across transactions, lending, and collections. No unified policy layer. No consistent governance. No end-to-end visibility.',
  },
  {
    num: '03',
    title: 'Compliance Without Control',
    body: 'Regulators demand audit trails, maker-checker flows, and explainable decisions. Most legacy systems cannot deliver this without significant manual overhead.',
  },
]

export default function ProblemSection() {
  const ref = useReveal()

  return (
    <section className="section light-section problem-section" id="problem" ref={ref}>
      <div className="container">
        <div className="problem__layout">
          <div className="problem__image-col reveal d1">
            <img src="/images/challenge.png" alt="Financial operations challenge" className="problem__image" />
          </div>
          <div className="problem__content-col">
            <div className="problem__header reveal d2">
              <span className="label">The Challenge</span>
              <h2 className="display-l">Financial Institutions Are Still Running on Legacy Decisions.</h2>
              <p className="problem__sub">
                Rising NPAs, manual workflows, regulatory pressure, and agile competitors — your institution is being asked to move faster while doing more with less.
              </p>
            </div>
            <div className="problem__list">
              {problems.map((p, i) => (
                <div key={p.num} className={`problem-item reveal d${i + 3}`}>
                  <span className="problem-item__num">{p.num}</span>
                  <div>
                    <h3 className="problem-item__title">{p.title}</h3>
                    <p className="problem-item__body">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
