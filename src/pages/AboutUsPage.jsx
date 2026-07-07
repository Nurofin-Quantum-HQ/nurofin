import useReveal from '../hooks/useReveal'

const differentiators = [
  {
    title: 'Intelligence-Driven',
    description:
      'Combining technology, automation, AI, and data-driven decisioning to solve real business challenges.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
        <line x1="9" y1="21" x2="15" y2="21" />
        <line x1="10" y1="24" x2="14" y2="24" />
      </svg>
    ),
  },
  {
    title: 'Industry-Focused Solutions',
    description:
      'Building specialized platforms for financial services and operational management across multiple industries.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="12.01" />
      </svg>
    ),
  },
  {
    title: 'Orchestration at Scale',
    description:
      'Connecting systems, partners, processes, and workflows through a unified technology layer.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Trust & Transparency',
    description:
      'Delivering visibility, control, accountability, and governance across every process and transaction.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Future Ready',
    description:
      'Designed to adapt to evolving technologies, business models, regulatory requirements, and industry needs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
]

export default function AboutUsPage() {
  const contentRef = useReveal()
  const diffRef = useReveal()

  return (
    <>
      {/* ── Hero ── */}
      <section className="aboutus-hero">
        <div className="aboutus-hero__glow" aria-hidden="true" />
        <div className="container">
          <div className="aboutus-hero__inner">
            <span className="label fade-up" style={{ animationDelay: '0.05s' }}>Who We Are</span>
            <h1 className="display-xl fade-up" style={{ animationDelay: '0.12s' }}>
              About <span className="grad-text">Us</span>
            </h1>
            <p className="aboutus-hero__sub fade-up" style={{ animationDelay: '0.22s' }}>
              Technology-driven financial infrastructure for the future of financial services and digital business operations.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section aboutus-content" ref={contentRef}>
        <div className="container aboutus-content__container">
          <div className="reveal d1">
            <p>
              Nurofin is a technology-driven financial infrastructure company building intelligent platforms for the future of financial services and digital business operations.
            </p>
            <p>
              We help banks, NBFCs, fintechs, enterprises, and digital platforms simplify complex financial journeys through intelligent orchestration, automation, and decision-making. Our solutions sit at the intersection of technology, finance, and intelligence—enabling organizations to operate more efficiently, manage risk effectively, and deliver better experiences at scale.
            </p>
            <p>
              As businesses and financial ecosystems become increasingly interconnected, organizations face growing challenges in managing payments, lending, compliance, workflows, partnerships, and operational processes. Nurofin addresses these challenges by providing intelligent platforms that transform complexity into efficiency through automation, visibility, and actionable insights.
            </p>
            <p>
              Beyond financial infrastructure, Nurofin also develops industry-focused SaaS solutions that help businesses digitize operations, improve accountability, and gain real-time visibility into their activities. Whether it's financial orchestration, decision intelligence, workflow automation, or operational tracking platforms such as Build Track, our goal is to simplify complex processes and enable smarter decision-making.
            </p>
            <p>
              Our solutions are designed to support seamless money movement, workflow automation, financial decisioning, operational visibility, and ecosystem integration while maintaining the transparency, control, security, and trust required in today's digital environment.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="aboutus-vm reveal d2">
            <div className="aboutus-vm__card">
              <div className="aboutus-vm__icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h2>Our Vision</h2>
              <p>
                To build intelligent digital infrastructure that empowers organizations to make smarter decisions, create trusted experiences, and unlock new opportunities for growth.
              </p>
            </div>
            <div className="aboutus-vm__card">
              <div className="aboutus-vm__icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h2>Our Mission</h2>
              <p>
                To simplify complex business and financial ecosystems through technology, intelligence, and automation—helping organizations innovate faster, operate smarter, and serve customers better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ── */}
      <section className="section light-section aboutus-diff" ref={diffRef}>
        <div className="container">
          <h2 className="display-l aboutus-diff__heading reveal d1">
            What Makes Nurofin <span className="grad-text">Different</span>
          </h2>
          <div className="aboutus-diff__grid">
            {differentiators.map((d, i) => (
              <div key={d.title} className={`aboutus-diff__card reveal d${i + 2}`}>
                <div className="aboutus-diff__card-icon">{d.icon}</div>
                <h3 className="aboutus-diff__card-title">{d.title}</h3>
                <p className="aboutus-diff__card-desc">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing Statement ── */}
      <section className="section aboutus-closing">
        <div className="container">
          <div className="aboutus-closing__inner">
            <p className="aboutus-closing__text">
              At Nurofin, we believe the future will be defined not just by how efficiently businesses operate or how quickly money moves, but by how intelligently decisions are made and how trust is built across every interaction.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
