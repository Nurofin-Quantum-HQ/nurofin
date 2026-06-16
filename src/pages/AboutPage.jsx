import useReveal from '../hooks/useReveal'

const leadership = [
  {
    name: 'Vincent Lucas',
    role: 'Founder',
    photo: '/images/team/vincent.jpg',
    bio: 'Founder of Nurofin Quantum Flux LLP with 10+ years of experience across payments, lending, and fintech ecosystems. Has led microfinance scale-up, banking partnerships, and large-scale initiatives including One Nation One Card (NCMC) and smart city payment solutions. Worked with leading institutions including ICICI Bank, HDFC Bank, Bank of Baroda, and global partners across the Middle East and Africa.',
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
                <p className="leader-card__bio">{p.bio}</p>
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
