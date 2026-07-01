import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const leadership = [
  {
    name: 'Vincent Lucas',
    role: 'Founder & CEO',
    photo: '/images/team/vincent.jpg',
    bio: [
      'With over 15 years of experience across banking, payments, lending, microfinance, financial inclusion, and fintech innovation, Vincent Lucas has built a career around transforming emerging technologies into scalable financial solutions.',
      'He has worked with banks, NBFCs, fintechs, payment networks, and technology partners to build and scale digital financial ecosystems, spanning payments, lending, cards, financial infrastructure, strategic partnerships, and product innovation.',
      'Throughout his career, Vincent has been at the forefront of industry transformation—from supporting EMV card and switch implementations during India\'s migration to chip-based payments, to contributing to early digital payment initiatives, driving National Common Mobility Card (NCMC) programs, and implementing blockchain-based systems for the microfinance sector.',
      'He has collaborated with leading institutions including ICICI Bank, HDFC Bank, Bank of Baroda, Federal Bank, City Union Bank, Karur Vysya Bank, Dhanlaxmi Bank, and partners across India, the Middle East, and Africa.',
      'Driven by a passion for innovation, Vincent founded Nurofin to build intelligent financial infrastructure that helps institutions orchestrate money movement, automate decisions, and create trusted financial experiences.',
    ],
    bioQuote: 'The future of financial services will be powered by smarter decisions, greater trust, and intelligent technology.',
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
  const [emailCopied, setEmailCopied] = useState(false)

  const handleCopyEmail = async (e) => {
    const email = 'vincent@nurofin.com'
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      // Clipboard API blocked — fall through; mailto: will still open
    }
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2200)
  }

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
                    <p className="leader-card__quote" style={{ fontSize: '1.1em', fontWeight: 'bold', color: 'var(--color-primary, #67C8FF)', marginTop: '20px' }}>
                      "{p.bioQuote}"
                    </p>
                  )}
                  {/* Email link with clipboard copy — only for Vincent */}
                  {p.name === 'Vincent Lucas' && (
                    <div className="leader-card__contact">
                      <a
                        href="mailto:vincent@nurofin.com"
                        onClick={handleCopyEmail}
                        className="leader-card__email-link"
                        aria-label="Email Vincent Lucas (also copies to clipboard)"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        vincent@nurofin.com
                      </a>
                      <span
                        className={`leader-card__copy-badge${emailCopied ? ' leader-card__copy-badge--visible' : ''}`}
                        aria-live="polite"
                        aria-atomic="true"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Copied!
                      </span>
                    </div>
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
