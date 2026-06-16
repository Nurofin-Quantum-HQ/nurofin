import useReveal from '../hooks/useReveal'

const products = [
  {
    status: 'live',
    icon: '/images/icons/gmdi.png',
    title: 'GMDI',
    subtitle: 'Global Money Decision Infrastructure',
    body: 'Programmable payment transaction governance. Define rules, automate approvals, and maintain complete audit trails — without manual bottlenecks.',
    metric: '85% faster approvals. 100% auditability.',
    href: '/gmdi',
  },
  {
    status: 'soon',
    icon: '/images/icons/lendlogic.png',
    title: 'LendLogic AI',
    subtitle: 'Behavioral Credit Intelligence',
    body: 'Dynamic credit scoring that goes beyond static bureau data — using behavioral signals to assess risk and expand creditworthy reach.',
    metric: 'Smarter lending. Fewer defaults.',
    href: null,
  },
  {
    status: 'soon',
    icon: '/images/icons/recoveryiq.png',
    title: 'RecoveryIQ',
    subtitle: 'AI-Powered Collections',
    body: 'Reduce NPAs with intelligent collections workflows that predict risk, prioritise outreach, and improve recovery rates without escalation.',
    metric: 'Higher recoveries. Lower NPA exposure.',
    href: null,
  },
  {
    status: 'soon',
    icon: '/images/icons/finsync.png',
    title: 'FinSync Advisory',
    subtitle: 'Financial Transformation Consulting',
    body: 'Strategic advisory for institutions navigating digital transformation — from technology selection to operational redesign and regulatory readiness.',
    metric: 'Strategy. Implementation. Results.',
    href: null,
  },
]

export default function ProductsSection() {
  const ref = useReveal()

  return (
    <section className="section" id="products" ref={ref}>
      <div className="container">
        <div className="products__header reveal d1">
          <span className="label">The Platform</span>
          <h2 className="display-l">One Platform. Four Intelligent Products.</h2>
          <p className="products__sub">
            Each module works independently or as part of a connected financial intelligence stack.
          </p>
        </div>

        <div className="products__grid">
          {products.map((p, i) => (
            <div key={p.title} className={`product-card reveal d${i + 2}${p.status === 'live' ? ' product-card--featured' : ''}`}>
              <span className={`product-card__status product-card__status--${p.status}`}>
                {p.status === 'live' ? 'Live' : 'Coming Soon'}
              </span>
              <img src={p.icon} alt={p.title} className="product-card__icon" />
              <div>
                <h3 className="product-card__title">{p.title}</h3>
                <p className="product-card__subtitle">{p.subtitle}</p>
              </div>
              <p className="product-card__body">{p.body}</p>
              <p className="product-card__metric">{p.metric}</p>
              {p.href && (
                <a href={p.href} className="product-card__cta">
                  Explore GMDI
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
