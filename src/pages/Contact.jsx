import { useState } from 'react'

const SUBJECTS = ['GMDI', 'BuildTrack', 'General Inquiry']

const INITIAL_FORM = {
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [feedback, setFeedback] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setFeedback('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setFeedback(data.message || 'Message sent! We will get back to you shortly.')
        setForm(INITIAL_FORM)
      } else {
        setStatus('error')
        setFeedback(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setFeedback('Network error. Please check your connection and try again.')
    }
  }

  const isLoading = status === 'loading'

  return (
    <>
      {/* ── Hero ── */}
      <section className="contact-hero">
        <div className="contact-hero__glow" aria-hidden="true" />
        <div className="container">
          <div className="contact-hero__inner">
            <span className="label fade-up" style={{ animationDelay: '0.05s' }}>Get In Touch</span>
            <h1 className="display-xl fade-up" style={{ animationDelay: '0.12s' }}>
              Let's build something<br />
              <span className="grad-text">remarkable together.</span>
            </h1>
            <p className="contact-hero__sub fade-up" style={{ animationDelay: '0.22s' }}>
              Whether you're exploring BuildTrack, our Payout Engine, or have a general enquiry —
              our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-layout">

            {/* ── Left: Info Panel ── */}
            <aside className="contact-info">
              <div className="contact-info__block">
                <div className="contact-info__icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info__label">Email</p>
                  <a href="mailto:info.nurofin@gmail.com" className="contact-info__value">info.nurofin@gmail.com</a>
                  <p className="contact-info__value" style={{ fontSize: '0.85em', opacity: 0.7, marginTop: '4px' }}>
                    For escalations: <a href="mailto:vincent@nurofin.com" style={{ color: 'inherit' }}>vincent@nurofin.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-info__block">
                <div className="contact-info__icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info__label">Response Time</p>
                  <p className="contact-info__value">Within 24 hours</p>
                </div>
              </div>

              <div className="contact-info__divider" />

              <div className="contact-info__products">
                <p className="contact-info__products-label">Our Products</p>
                <div className="contact-info__product-pill">
                  <span className="contact-info__product-dot" />
                  BuildTrack — Construction Management
                </div>
                <div className="contact-info__product-pill">
                  <span className="contact-info__product-dot" />
                  GMDI — Payment Transaction Governance
                </div>
                <div className="contact-info__product-pill contact-info__product-pill--soon">
                  <span className="contact-info__product-dot contact-info__product-dot--soon" />
                  LendLogic AI — Coming Soon
                </div>
              </div>
            </aside>

            {/* ── Right: Form Card ── */}
            <div className="contact-form-card">
              <div className="contact-form-card__header">
                <h2 className="contact-form-card__title">Send us a message</h2>
                <p className="contact-form-card__sub">Fill in the details below and we'll get back to you promptly.</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {/* Row 1: Name + Email */}
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="contact-name" className="contact-form__label">
                      Full Name <span className="contact-form__required">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="contact-form__input"
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="contact-email" className="contact-form__label">
                      Work Email <span className="contact-form__required">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="contact-form__input"
                    />
                  </div>
                </div>

                {/* Row 2: Company + Subject */}
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="contact-company" className="contact-form__label">Company Name</label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="contact-form__input"
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="contact-subject" className="contact-form__label">
                      Subject <span className="contact-form__required">*</span>
                    </label>
                    <div className="contact-form__select-wrap">
                      <select
                        id="contact-subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className={`contact-form__select${form.subject ? '' : ' contact-form__select--placeholder'}`}
                      >
                        <option value="" disabled>Select a topic…</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <svg className="contact-form__select-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="contact-form__field contact-form__field--full">
                  <label htmlFor="contact-message" className="contact-form__label">
                    Message <span className="contact-form__required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your project, your use case, or any questions you have…"
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="contact-form__textarea"
                  />
                </div>

                {/* Feedback */}
                {status === 'success' && (
                  <div className="contact-form__alert contact-form__alert--success" role="alert">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    {feedback}
                  </div>
                )}
                {status === 'error' && (
                  <div className="contact-form__alert contact-form__alert--error" role="alert">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {feedback}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary contact-form__submit"
                  id="contact-submit-btn"
                >
                  {isLoading ? (
                    <>
                      <span className="contact-form__spinner" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="btn-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
