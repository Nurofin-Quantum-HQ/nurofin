import useReveal from '../hooks/useReveal'

const leadership = [
  {
    name: 'Vincent Lucas',
    role: 'Founder & CEO',
    photo: '/images/team/vincent.jpg',
    bio: [
      'With over 15 years of experience across banking, payments, lending, financial inclusion, and fintech innovation, Vincent Lucas has built a career around turning emerging technologies into scalable financial solutions that create real business impact.',
      'He has worked closely with banks, NBFCs, fintechs, payment networks, and technology partners to build and scale digital financial ecosystems, with expertise spanning business leadership, strategic partnerships, product innovation, payments, lending, microfinance, cards, and financial infrastructure.',
      'Throughout his career, Vincent has consistently been at the forefront of industry transformation—supporting banks in EMV card and switch implementations during India\'s migration to chip-based payments, contributing to payment gateway initiatives during the early growth of digital payments, driving National Common Mobility Card (NCMC) implementations as India embraced interoperable transit payments, and working on innovative lending and microfinance programs, including blockchain-based systems for the microfinance sector, helping institutions leverage emerging technologies to improve efficiency, transparency, scalability, and customer experience.',
      'He has collaborated with leading financial institutions including ICICI Bank, HDFC Bank, Bank of Baroda, Federal Bank, City Union Bank, Karur Vysya Bank, Dhanlaxmi Bank, and several fintech and technology partners across India, the Middle East, and Africa.',
      'Driven by a passion for solving complex financial challenges, Vincent founded Nurofin to build intelligent financial infrastructure that enables institutions to orchestrate money movement, automate decisions, and deliver smarter financial experiences at scale.',
    ],
    bioQuote: 'The future of financial services will not be built by moving money faster alone, but by enabling smarter decisions, greater transparency, and deeper trust across every financial journey.',
  },
]

const team = [
  {
    name: 'Pranesh',
    role: 'Backend & Architecture',
    photo: '/images/team/pranesh.jpg',
    bio: 'Leads development of Nurofin\'s core financial infrastructure — building a secure, scalable backend for high-volume transactions. Architected the AI-driven NLP rule engine that powers intelligent transaction routing.',
  },
  {
    name: 'Harshini',
    role: 'Mobile & AI Voice',
    photo: '/images/team/harshini.jpg',
    bio: 'Develops Nurofin\'s Android applications with a focus on performance and seamless UX. Leads AI-powered voice support features, secure API integrations, and real-time data handling for scalable financial operations.',
  },
  {
    name: 'Roslien',
    role: 'Frontend & UX',
    photo: '/images/team/roslien.jpg',
    bio: 'Drives the user experience for the Nurofin Merchant Dashboard — delivering clean, responsive interfaces built with React, Next.js, and Tailwind CSS for complex financial workflows.',
  },
]

const advisors = [
  {
    name: 'Shweta Shukla',
    role: 'Strategic Advisor',
    photo: '/images/team/shweta.jpg',
    bio: 'Founder of Trestlework Technologies with 17+ years in payments and fintech. Played a key role in shaping India\'s digital payments ecosystem, including work with NPCI on large-scale payment infrastructure. Brings deep expertise in card systems, tokenization, and payment networks.',
  },
]

export default function AboutPage() {
  const leadershipRef = useReveal()
  const teamRef = useReveal()
  const advisorsRef = useReveal()

  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__glow" aria-hidden="true" />
        <div className="container">
          <div className="about-hero__inner">
            <h1 className="display-xl fade-up" style={{ animationDelay: '0.1s' }}>
              Built by people who've<br />
              <span className="grad-text">lived inside finance.</span>
            </h1>
            <p className="about-hero__sub fade-up" style={{ animationDelay: '0.22s' }}>
              Nurofin is led by fintech operators, engineers, and payment ecosystem leaders who've spent careers building the infrastructure they now help others run better.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section light-section" id="leadership" ref={leadershipRef}>
        <div className="container">
          <h2 className="display-l about-section__heading reveal d1">Leadership</h2>
          {leadership.map((p, i) => (
            <div key={p.name} className={`leader-card reveal d${i + 2}`}>
              <div className="leader-card__photo-wrap">
                {p.photo
                  ? <img src={p.photo} alt={p.name} className="leader-card__photo" />
                  : <div className="leader-card__photo-placeholder" />
                }
              </div>
              <div className="leader-card__content">
                <div>
                  <h2 className="leader-card__name">{p.name}</h2>
                  <span className="leader-card__role">{p.role}</span>
                </div>
                <div className="leader-card__bio-wrap">
                  {Array.isArray(p.bio)
                    ? p.bio.map((para, idx) => (
                        <p key={idx} className="leader-card__bio">{para}</p>
                      ))
                    : <p className="leader-card__bio">{p.bio}</p>
                  }
                  {p.bioQuote && (
                    <p className="leader-card__bio leader-card__bio--quote">
                      <strong>{p.bioQuote}</strong>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Team */}
      <section className="section" id="team" ref={teamRef}>
        <div className="container">
          <h2 className="display-l about-section__heading reveal d1">Core Technology Team</h2>
          <div className="team-grid">
            {team.map((p, i) => (
              <div key={p.name} className={`team-card reveal d${i + 2}`}>
                <div className="team-card__photo-wrap">
                  {p.photo
                    ? <img src={p.photo} alt={p.name} className="team-card__photo" />
                    : <div className="team-card__photo-placeholder"><span>{p.name[0]}</span></div>
                  }
                </div>
                <h3 className="team-card__name">{p.name}</h3>
                <span className="team-card__role">{p.role}</span>
                <p className="team-card__bio">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="section light-section" id="advisors" ref={advisorsRef}>
        <div className="container">
          <h2 className="display-l about-section__heading reveal d1">Strategic Advisors</h2>
          {advisors.map((p, i) => (
            <div key={p.name} className={`leader-card reveal d${i + 2}`}>
              <div className="leader-card__photo-wrap leader-card__photo-wrap--circle">
                {p.photo
                  ? <img src={p.photo} alt={p.name} className="leader-card__photo" />
                  : <div className="leader-card__photo-placeholder" />
                }
              </div>
              <div className="leader-card__content">
                <div>
                  <h2 className="leader-card__name">{p.name}</h2>
                  <span className="leader-card__role">{p.role}</span>
                </div>
                <p className="leader-card__bio">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
