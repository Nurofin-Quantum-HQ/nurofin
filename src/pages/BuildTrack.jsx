import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const features = [
  {
    title: 'AI-Powered Voice Entry',
    body: 'Simply speak material purchases, labour payments, or equipment usage. Build Track automatically converts voice inputs into structured records, reducing paperwork and saving valuable time on site.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
    ),
  },
  {
    title: 'Real-Time Cost Tracking',
    body: 'Track every expense against project budgets. Monitor material, labour, and equipment costs in real time and gain complete visibility into project spending.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
  },
  {
    title: 'Project & Phase Management',
    body: 'Track project progress by floor, phase, and activity. Update completion percentages, upload photos from the site, and maintain a clear execution history throughout the project lifecycle.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    ),
  },
  {
    title: 'Approval Workflow',
    body: 'Every entry submitted from the site goes through an approval process, ensuring accountability and financial transparency across projects.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
  },
  {
    title: 'Revenue & Expense Tracking',
    body: 'Track client payments, project inflows, contractor payouts, advances, refunds, and project-related expenses from a single dashboard.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
    ),
  },
  {
    title: 'Team & Role Management',
    body: 'Assign Admin, Supervisor, Contractor, and Worker roles with controlled permissions and project-level access.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
]

const howSteps = [
  {
    step: '01',
    title: 'Capture Information on Site',
    body: 'Workers log Material, Labour, or Equipment entries directly from the mobile app using voice input or structured forms.',
  },
  {
    step: '02',
    title: 'Review & Approve',
    body: 'Entries are submitted for approval with project details, activity information, and supporting photo evidence.',
  },
  {
    step: '03',
    title: 'Monitor Progress & Costs',
    body: 'Track project budgets, expenses, approvals, and completion progress in real time through the Build Track dashboard.',
  },
]

const audience = [
  'Real Estate Developers',
  'Residential Builders',
  'Commercial Contractors',
  'Infrastructure Companies',
  'Project Management Consultants (PMCs)',
  'Construction Service Providers',
]

const modules = [
  { title: 'Project Management', body: 'Create and manage multiple projects with detailed project information, floors, phases, activities, and execution milestones.' },
  { title: 'Budget Management', body: 'Set and manage separate budgets for Material, Labour, and Equipment expenses. Monitor actual spend against planned budgets in real time.' },
  { title: 'Material Tracking', body: 'Track material purchases, suppliers, quantities, rates, and material-related expenses across projects.' },
  { title: 'Labour Tracking', body: 'Record labour-related expenses against specific projects, floors, phases, and activities. Monitor labour spending and maintain complete payment records.' },
  { title: 'Equipment Tracking', body: 'Track equipment rentals, equipment usage costs, and equipment-related expenses throughout the project lifecycle.' },
  { title: 'Progress Monitoring', body: 'Monitor project progress through phase-wise completion updates and photographic proof submitted directly from the construction site.' },
  { title: 'Financial Management', body: 'Track revenue inflows, project expenses, contractor payments, advances, and overall project financial performance.' },
  { title: 'Reporting & Analytics', body: 'Access project dashboards, budget utilization reports, expense summaries, and project progress insights.' },
  { title: 'Team & Role Management', body: 'Manage project teams through role-based access controls for Admins, Supervisors, Contractors, and Workers.' },
]

const plans = [
  { name: 'Free', price: '₹0', projects: '1 Project', users: '2 Users', features: 'Material & Labour Tracking, Basic Dashboard, Project Monitoring', popular: false },
  { name: 'Starter', price: '₹499/mo', projects: '3 Projects', users: '5 Users', features: 'Material, Labour & Equipment Tracking, Budget Monitoring, Approval Workflow', popular: false },
  { name: 'Growth', price: '₹999/mo', projects: '10 Projects', users: '10 Users', features: 'Progress Tracking, Photo Uploads, Advanced Reports, Role Management', popular: false },
  { name: 'Pro', price: '₹1,499/mo', projects: '25 Projects', users: '25 Users', features: 'AI Voice Entry, Revenue & Expense Tracking, Cost Visibility, Priority Support', popular: true },
  { name: 'Business', price: '₹2,499/mo', projects: 'Unlimited Projects', users: '50 Users', features: 'Advanced User Management, Dedicated Support', popular: false },
  { name: 'Enterprise', price: 'Contact Sales', projects: 'Unlimited Projects', users: 'Unlimited Users', features: 'Custom Requirements, Dedicated Account Management', popular: false },
]

const tags = [
  'Real-Time Cost Tracking',
  'AI-Powered Voice Entry',
  'Project Progress Monitoring',
  'Budget Management',
  'Team Collaboration',
]

export default function BuildTrack() {
  const [activeModule, setActiveModule] = useState(0)
  const navigate = useNavigate()

  return (
    <>
      {/* ── Hero ── */}
      <section className="bt-hero buildtrack-hero-container">
        <div className="container">
          <div className="bt-hero__inner buildtrack-hero-content">
            <span className="label fade-up" style={{ animationDelay: '0.05s' }}>New Product</span>
            <h1 className="display-xl fade-up" style={{ animationDelay: '0.12s' }}>
              Build Track
            </h1>
            <p className="bt-hero__tagline fade-up" style={{ animationDelay: '0.2s' }}>
              The Construction Management Platform Built for Real Sites
            </p>
            <p className="bt-hero__sub fade-up" style={{ animationDelay: '0.28s' }}>
              Track materials, labour, equipment, budgets, and project progress in real time.
              Build Track helps developers, contractors, and construction teams gain complete
              visibility and control over every project from foundation to handover.
            </p>
            <div className="bt-hero__tags fade-up" style={{ animationDelay: '0.36s' }}>
              {tags.map((t) => (
                <span key={t} className="bt-tag">{t}</span>
              ))}
            </div>
            <div className="bt-hero__ctas fade-up" style={{ animationDelay: '0.44s' }}>
              <p className="hero-subtext" style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>
                Start Free. Scale as You Grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Build Track ── */}
      <section className="section light-section">
        <div className="container">
          <div className="bt-why__layout">
            <div className="bt-why__content">
              <span className="label">Why Build Track</span>
              <h2 className="display-l" style={{ marginTop: 16 }}>
                One platform for your <span className="grad-text">entire site.</span>
              </h2>
              <p className="bt-why__body">
                Construction projects often suffer from delayed updates, manual record keeping, budget overruns, and
                poor visibility across teams. Build Track brings site operations, finances, and project progress into
                one platform, helping construction businesses make faster decisions, improve accountability, and keep
                projects on schedule and within budget.
              </p>
            </div>
            <div className="bt-why__stats">
              <div className="bt-stat">
                <span className="bt-stat__value grad-text">100%</span>
                <span className="bt-stat__label">Financial Visibility</span>
              </div>
              <div className="bt-stat">
                <span className="bt-stat__value grad-text">3×</span>
                <span className="bt-stat__label">Faster Site Updates</span>
              </div>
              <div className="bt-stat">
                <span className="bt-stat__value grad-text">0</span>
                <span className="bt-stat__label">Manual Registers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="section" id="bt-features">
        <div className="container">
          <div className="bt-section-header">
            <span className="label">Key Features</span>
            <h2 className="display-l" style={{ marginTop: 16 }}>
              Everything you need to <span className="grad-text">manage sites.</span>
            </h2>
          </div>
          <div className="bt-features-grid">
            {features.map((f) => (
              <div key={f.title} className="bt-feature-card">
                <div className="bt-feature-card__icon">{f.icon}</div>
                <h3 className="bt-feature-card__title">{f.title}</h3>
                <p className="bt-feature-card__body">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section light-section" id="bt-how">
        <div className="container">
          <div className="bt-section-header bt-section-header--center">
            <span className="label">How It Works</span>
            <h2 className="display-l" style={{ marginTop: 16 }}>
              From <span className="grad-text">site to dashboard</span> in 3 steps.
            </h2>
          </div>
          <div className="bt-how-steps">
            {howSteps.map((s) => (
              <div key={s.step} className="bt-how-card">
                <span className="bt-how-card__num">{s.step}</span>
                <div className="bt-how-card__content">
                  <h3 className="bt-how-card__title">{s.title}</h3>
                  <p className="bt-how-card__body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built For ── */}
      <section className="section" id="bt-audience">
        <div className="container">
          <div className="bt-section-header bt-section-header--center">
            <span className="label">Built For</span>
            <h2 className="display-l" style={{ marginTop: 16 }}>
              Who uses <span className="grad-text">Build Track?</span>
            </h2>
          </div>
          <div className="bt-audience-grid">
            {audience.map((a, i) => (
              <div key={a} className="bt-audience-card">
                <span className="bt-audience-card__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="bt-audience-card__name">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Modules ── */}
      <section className="section light-section" id="bt-modules">
        <div className="container">
          <div className="bt-section-header">
            <span className="label">Core Modules</span>
            <h2 className="display-l" style={{ marginTop: 16 }}>
              Everything in <span className="grad-text">one platform.</span>
            </h2>
          </div>
          <div className="bt-modules-layout">
            <div className="bt-modules-tabs">
              {modules.map((m, i) => (
                <button
                  key={m.title}
                  className={`bt-modules-tab${activeModule === i ? ' bt-modules-tab--active' : ''}`}
                  onClick={() => setActiveModule(i)}
                >
                  <span className="bt-modules-tab__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="bt-modules-tab__label">{m.title}</span>
                </button>
              ))}
            </div>
            <div className="bt-modules-panel">
              <div className="bt-modules-panel__inner" key={activeModule}>
                <h3 className="bt-modules-panel__title">{modules[activeModule].title}</h3>
                <p className="bt-modules-panel__body">{modules[activeModule].body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="section" id="bt-pricing">
        <div className="container">
          <div className="bt-section-header bt-section-header--center">
            <span className="label">Pricing</span>
            <h2 className="display-l" style={{ marginTop: 16 }}>
              Start Free. <span className="grad-text">Scale as You Grow.</span>
            </h2>
          </div>
          <div className="bt-pricing-grid">
            {plans.map((p) => (
              <div key={p.name} className={`bt-price-card${p.popular ? ' bt-price-card--popular' : ''}`}>
                {p.popular && <span className="bt-price-card__badge">⭐ Most Popular</span>}
                <h3 className="bt-price-card__name">{p.name}</h3>
                <p className="bt-price-card__price">{p.price}</p>
                <div className="bt-price-card__meta">
                  <span>{p.projects}</span>
                  <span>{p.users}</span>
                </div>
                <p className="bt-price-card__features">{p.features}</p>
                <button
                  onClick={() => navigate('/contact')}
                  className={p.popular ? 'btn-primary bt-price-card__cta' : 'btn-ghost bt-price-card__cta'}
                >
                  {p.name === 'Enterprise' ? 'Contact Sales' : 'Contact Us'}
                </button>
              </div>
            ))}
          </div>
          <p className="bt-pricing-included">
            <strong>Included in All Plans:</strong> Mobile App Access, Web Dashboard Access,
            Project Budget Tracking, Expense Management, Approval Workflow, Secure Cloud Storage,
            Project Progress Monitoring.
          </p>
          <p className="bt-pricing-disclaimer">
            All prices exclude applicable taxes. Features, limits, and pricing may change with prior notice.
            Existing subscribers will be informed before any pricing changes take effect.
          </p>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="bt-cta-section">
        <div className="bt-cta-section__glow" aria-hidden="true" />
        <div className="container">
          <div className="bt-cta__inner">
            <span className="label label--dark">Why Construction Teams Choose Build Track</span>
            <div className="bt-cta__pills">
              {['Built Specifically for Construction', 'Complete Financial Visibility', 'Faster Site Updates', 'Better Accountability', 'Improved Budget Control'].map((v) => (
                <span key={v} className="bt-cta__pill">{v}</span>
              ))}
            </div>
            <h2 className="display-l bt-cta__headline">
              Ready to Build Smarter?
            </h2>
            <p className="bt-cta__sub">
              Gain complete visibility into project costs, progress, and profitability with Build Track.
            </p>
            <div className="bt-cta__buttons">
              <button onClick={() => navigate('/contact')} className="btn-primary">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
