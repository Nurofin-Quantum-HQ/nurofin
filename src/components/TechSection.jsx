import useReveal from '../hooks/useReveal'

const points = [
  {
    title: 'Cloud-Native Architecture',
    body: 'Designed for scale from day one — deployed on modern cloud infrastructure with high availability and enterprise-grade uptime commitments.',
  },
  {
    title: 'No Balance Sheet Risk',
    body: 'Nurofin holds no funds and takes no custody of assets. Your institution retains full financial and operational control at all times.',
  },
  {
    title: 'Regulatory Compliance by Design',
    body: 'Compliance is embedded in the product architecture — not bolted on. Audit trails, maker-checker controls, and policy enforcement are native to every module.',
  },
  {
    title: 'Secure by Default',
    body: 'End-to-end encryption, role-based access, and comprehensive logging ensure your data and workflows meet institutional security standards.',
  },
]

export default function TechSection() {
  const ref = useReveal()

  return (
    <section className="section light-section" id="tech" ref={ref}>
      <div className="container">
        <div className="tech__header reveal d1">
          <h2 className="display-l">Cloud-Native. Compliant.<br />Built to Scale.</h2>
        </div>

        <div className="tech__grid">
          {points.map((p, i) => (
            <div key={p.title} className={`tech-card reveal d${i + 2}`}>
              <div className="tech-card__bar" />
              <h3 className="tech-card__title">{p.title}</h3>
              <p className="tech-card__body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
