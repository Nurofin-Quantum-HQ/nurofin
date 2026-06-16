import { useState } from 'react'
import VideoModal from './VideoModal'

export default function GMDIHero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section className="hero gmdi-hero" id="gmdi-hero">
        <div className="hero__bg" aria-hidden="true">
          <img src="/images/hero/gmdi-hero.png" alt="" />
        </div>
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" />

        <div className="hero__inner">
          <div className="fade-up" style={{ animationDelay: '0.05s' }}>
            <span className="label">Global Money Decision Infrastructure</span>
          </div>
          <h1 className="display-xl hero__headline fade-up" style={{ animationDelay: '0.15s' }}>
            Stop Governing Manually.<br />
            <span className="grad-text">Start Governing at Scale.</span>
          </h1>
          <p className="hero__sub fade-up" style={{ animationDelay: '0.28s' }}>
            GMDI is a programmable payment transaction governance platform that replaces fragmented approvals, email chains, and Excel rebuilds — with one intelligent decision layer that connects, governs, and executes.
          </p>
          <div className="hero__ctas fade-up" style={{ animationDelay: '0.40s' }}>
            <button className="btn-primary" onClick={() => setVideoOpen(true)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Watch Video
            </button>
            <a href="mailto:vincent@nurofin.com" className="btn-ghost">Contact Us</a>
          </div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <div className="hero__scroll-line" />
        </div>
      </section>

      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </>
  )
}
