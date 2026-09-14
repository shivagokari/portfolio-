import { useEffect, useCallback, useState } from 'react'

interface CaseStudyData {
  id: string
  number: string
  title: string
  projectLabel: string
  meta: { key: string; value: string }[]
  objective: string
  strategy: string[]
  execution: string[]
  results: string[]
  tools: string[]
  websiteUrl?: string
  seoProof?: {
    keyword: string
    ranking: string
    page: string
    note: string
  }[]
}

const CASE_STUDIES: Record<string, CaseStudyData> = {
  'ynm-safety': {
    id: 'ynm-safety',
    number: '01',
    title: 'YNM Safety — SEO Project',
    projectLabel: 'SEO / Website Optimisation',
    meta: [
      { key: 'Industry', value: 'Safety Equipment Manufacturing' },
      { key: 'My Role', value: 'Digital Marketing Specialist' },
      { key: 'Duration', value: 'Oct 2025 – Present' },
      { key: 'Website', value: 'ynmsafety.com' },
    ],
    objective:
      'Improve organic search visibility for YNM Safety, a Hyderabad-based safety equipment manufacturer, to drive qualified B2B leads through search traffic.',
    strategy: [
      'Conducted a full website audit to identify technical SEO issues and opportunities',
      'Performed comprehensive keyword research targeting product-specific and industry terms',
      'Prioritised high-intent keywords relevant to safety equipment buyers in India',
      'Mapped content to user intent — informational, navigational and transactional',
    ],
    execution: [
      'Implemented on-page SEO: title tags, meta descriptions, heading structure and internal linking',
      'Fixed technical issues: page speed, mobile optimisation, crawlability and structured data',
      'Optimised product and category pages for target keywords',
      'Created SEO-optimised content for key product categories',
      'Set up Google Search Console and GA4 for tracking and reporting',
    ],
    results: [
      'Improved keyword rankings for multiple product-related search terms',
      'Increased organic impressions and click-through rates in Google Search Console',
      'Website now appearing in Google results for targeted industry keywords',
    ],
    tools: ['Google Search Console', 'Google Analytics 4', 'Ahrefs', 'Screaming Frog', 'PageSpeed Insights', 'WordPress'],
    websiteUrl: 'https://ynmsafety.com/',
    seoProof: [
      {
        keyword: 'cold plastic paint manufacturers',
        ranking: 'Tracked — see evidence below',
        page: 'ynmsafety.com',
        note: 'Targeted as part of product-category SEO strategy. Add screenshots to public/screenshots/ folder to display ranking evidence (e.g. gsc-ynm.png, rankings-ynm.png).',
      },
    ],
  },
  'google-ads': {
    id: 'google-ads',
    number: '02',
    title: 'Google Ads Campaigns',
    projectLabel: 'Paid Search / Lead Generation',
    meta: [
      { key: 'Campaign Types', value: 'Search, Display, YouTube' },
      { key: 'My Role', value: 'Campaign Manager' },
      { key: 'Objective', value: 'Lead Generation & Brand Awareness' },
    ],
    objective:
      'Plan, launch and optimise Google Ads campaigns to generate qualified leads and improve brand visibility across search, display and YouTube placements.',
    strategy: [
      'Identified high-intent keywords and negative keyword lists to maximise budget efficiency',
      'Structured campaigns by match type and audience intent (awareness, consideration, conversion)',
      'Designed ad copy and creatives tailored to each campaign stage',
      'Set up conversion tracking to measure leads, calls and form submissions accurately',
    ],
    execution: [
      'Built search campaigns targeting bottom-of-funnel keywords for direct lead generation',
      'Launched display retargeting campaigns to re-engage website visitors',
      'Created YouTube ads for brand awareness and upper-funnel reach',
      'Continuously A/B tested ad variations, landing pages and bid strategies',
      'Weekly performance reviews with bid adjustments, audience refinements and budget reallocation',
    ],
    results: [
      'Consistently maintained cost-per-lead within target thresholds',
      'Improved click-through rates through ongoing ad copy testing',
      'Reduced wasted spend via negative keyword management and audience exclusions',
      'Achieved strong conversion rates on optimised landing pages',
    ],
    tools: ['Google Ads', 'Google Keyword Planner', 'GA4', 'Google Tag Manager', 'Looker Studio'],
  },
  'meta-ads': {
    id: 'meta-ads',
    number: '03',
    title: 'Meta Ads Campaigns',
    projectLabel: 'Paid Social / Lead Generation',
    meta: [
      { key: 'Platforms', value: 'Facebook, Instagram' },
      { key: 'My Role', value: 'Campaign Manager' },
      { key: 'Objective', value: 'Lead Generation & Brand Awareness' },
    ],
    objective:
      'Create and manage Meta advertising campaigns that generate quality leads and build brand presence across Facebook and Instagram.',
    strategy: [
      'Defined target audiences using interest stacking, lookalike audiences and retargeting segments',
      'Developed creative briefs for image, carousel and video ad formats',
      'Set up Lead Generation and Traffic campaigns with relevant objectives per funnel stage',
      'Structured ad sets around distinct audience types to enable clear performance comparison',
    ],
    execution: [
      'Launched Lead Generation campaigns with native Facebook Lead Forms for frictionless conversion',
      'Built retargeting audiences from website visitors, video views and engagement signals',
      'Deployed ManyChat chatbot flows to auto-qualify and respond to leads from ads',
      'Tested multiple creative formats: static images, carousels, Reels and story ads',
      'Monitored frequency, CPM and CPL daily — pausing underperformers and scaling winners',
    ],
    results: [
      'Reduced manual DM response time by 60% through AI chatbot integration (ManyChat)',
      'Maintained cost-per-lead within budget targets across multiple campaign types',
      'Increased Instagram reach and engagement through ongoing creative optimisation',
      'Generated consistent lead volume for client sales pipelines',
    ],
    tools: ['Meta Ads Manager', 'Meta Business Suite', 'ManyChat', 'Canva', 'Meta Pixel', 'GA4'],
  },
  'bruno-homes': {
    id: 'bruno-homes',
    number: '04',
    title: 'Bruno Homes — Digital Marketing',
    projectLabel: 'Digital Marketing / Social Media',
    meta: [
      { key: 'Industry', value: 'Real Estate & Home Appliances' },
      { key: 'My Role', value: 'Digital Marketing Manager' },
      { key: 'Duration', value: 'Dec 2024 – Oct 2025' },
    ],
    objective:
      'Manage the full digital marketing function for Bruno Homes — from paid advertising and social media to e-commerce optimisation and AI automation.',
    strategy: [
      'Developed a multi-channel strategy spanning Google, Meta, LinkedIn and marketplaces',
      'Identified brand positioning opportunities to differentiate from competitors',
      'Created a content calendar combining brand storytelling and product promotion',
      'Evaluated AI tools and automation opportunities to reduce manual workload',
    ],
    execution: [
      'Managed Google, Meta and LinkedIn Ads for brand visibility and B2B/B2C lead generation',
      'Produced Instagram posts, reels and scripts using Canva and AI tools',
      'Deployed ManyChat AI chatbot to automate DM responses and reduce manual support by 60%',
      'Integrated AI workflows with Amazon, Flipkart and Meesho for e-commerce efficiency',
      'Optimised IndiaMART product listings for top search placement',
    ],
    results: [
      '60% reduction in manual DM handling through AI chatbot automation',
      'Improved brand presence across all social platforms through consistent, quality content',
      'Improved e-commerce listing performance on Amazon, Flipkart and IndiaMART',
      'Steady lead generation from Google and Meta campaigns through campaign period',
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Ads', 'ManyChat', 'Canva', 'Amazon Seller Central', 'Flipkart Seller Hub', 'IndiaMART'],
  },
}

interface CaseStudyModalProps {
  activeCase: string | null
  onClose: () => void
}

export default function CaseStudyModal({ activeCase, onClose }: CaseStudyModalProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const data = activeCase ? CASE_STUDIES[activeCase] : null

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxSrc) setLightboxSrc(null)
        else onClose()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, lightboxSrc])

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.classList.toggle('menu-open', !!activeCase)
    return () => document.body.classList.remove('menu-open')
  }, [activeCase])

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }, [onClose])

  return (
    <>
      {/* Modal overlay */}
      <div
        className={`modal-overlay${activeCase ? ' is-open' : ''}`}
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-label={data?.title ?? 'Case study'}
        aria-hidden={!activeCase}
      >
        {data && (
          <div className="modal" role="document">
            {/* Sticky close bar */}
            <div className="modal__close">
              <button
                className="modal__close-btn"
                onClick={onClose}
                aria-label="Close case study"
                id="modal-close-btn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
                Close
              </button>
            </div>

            <div className="modal__body">
              {/* Header */}
              <div className="modal__hero">
                <div className="modal__project-label">{data.projectLabel}</div>
                <h2 className="modal__title">{data.title}</h2>
              </div>

              {/* Meta */}
              <div className="modal__meta" role="list">
                {data.meta.map(m => (
                  <div className="modal__meta-item" key={m.key} role="listitem">
                    <span className="modal__meta-key">{m.key}</span>
                    <span className="modal__meta-value">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Objective */}
              <div className="modal__section">
                <div className="modal__section-title">Objective</div>
                <p className="modal__text">{data.objective}</p>
              </div>

              {/* Strategy */}
              <div className="modal__section">
                <div className="modal__section-title">Strategy</div>
                <ul className="modal__list" role="list">
                  {data.strategy.map((s, i) => (
                    <li key={i} className="modal__list-item">{s}</li>
                  ))}
                </ul>
              </div>

              {/* Execution */}
              <div className="modal__section">
                <div className="modal__section-title">Execution</div>
                <ul className="modal__list" role="list">
                  {data.execution.map((e, i) => (
                    <li key={i} className="modal__list-item">{e}</li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="modal__section">
                <div className="modal__section-title">Results</div>
                <ul className="modal__list" role="list">
                  {data.results.map((r, i) => (
                    <li key={i} className="modal__list-item">{r}</li>
                  ))}
                </ul>
              </div>

              {/* SEO Proof — YNM Safety */}
              {data.seoProof && data.seoProof.length > 0 && (
                <div className="modal__section">
                  <div className="modal__section-title">SEO Ranking Proof</div>
                  {data.seoProof.map((proof, i) => (
                    <div key={i}>
                      <div className="modal__meta" style={{ marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                        <div className="modal__meta-item">
                          <span className="modal__meta-key">Keyword</span>
                          <span className="modal__meta-value">{proof.keyword}</span>
                        </div>
                        <div className="modal__meta-item">
                          <span className="modal__meta-key">Page</span>
                          <span className="modal__meta-value">{proof.page}</span>
                        </div>
                        <div className="modal__meta-item">
                          <span className="modal__meta-key">Ranking</span>
                          <span className="modal__meta-value">{proof.ranking}</span>
                        </div>
                      </div>
                      <p className="modal__text" style={{ fontSize: '0.8125rem', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
                        {proof.note}
                      </p>
                    </div>
                  ))}
                  {/* Gallery: add screenshots to public/screenshots/ */}
                  <div className="modal__gallery" style={{ marginTop: '1rem' }}>
                    <div className="modal__gallery-item">
                      <div className="modal__gallery-placeholder">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span style={{ fontSize: '0.75rem' }}>Add: public/screenshots/gsc-ynm.png</span>
                      </div>
                    </div>
                    <div className="modal__gallery-item">
                      <div className="modal__gallery-placeholder">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span style={{ fontSize: '0.75rem' }}>Add: public/screenshots/rankings-ynm.png</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tools */}
              <div className="modal__section">
                <div className="modal__section-title">Tools Used</div>
                <div className="tag-row" role="list">
                  {data.tools.map(tool => (
                    <span key={tool} className="tag" role="listitem">{tool}</span>
                  ))}
                </div>
              </div>

              {/* Website link */}
              {data.websiteUrl && (
                <div style={{ marginTop: '2rem' }}>
                  <a
                    href={data.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary"
                    style={{ display: 'inline-flex' }}
                  >
                    Visit Website
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: '6px' }}>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="lightbox is-open"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot enlarged view"
        >
          <img src={lightboxSrc} alt="Screenshot enlarged" className="lightbox__img" />
          <button className="lightbox__close" onClick={() => setLightboxSrc(null)} aria-label="Close enlarged image">
            ✕
          </button>
        </div>
      )}
    </>
  )
}
