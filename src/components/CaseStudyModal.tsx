import { useEffect, useCallback, useState } from 'react'

interface CaseStudyData {
  id: string
  number: string
  title: string
  projectLabel: string
  proofImage?: string
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
    title: 'YNM Safety — #1 Google Ranking SEO Case Study',
    projectLabel: 'SEO / Google Search Top Ranking',
    proofImage: '/case-studies/ynm-seo-ranking.jpg',
    meta: [
      { key: 'Industry', value: 'Road Safety Equipment Manufacturing' },
      { key: 'My Role', value: 'Digital Marketing Specialist' },
      { key: 'Primary Keyword', value: 'cold plastic paint manufacturers' },
      { key: 'Google Rank', value: '#1 in Google Organic SERP' },
      { key: 'Duration', value: 'Oct 2025 – Present' },
      { key: 'Website', value: 'ynmsafety.com' },
    ],
    objective:
      'Achieve top #1 Google search ranking for the primary high-intent commercial B2B keyword "cold plastic paint manufacturers" and drive high-value manufacturing RFQs, distributor inquiries, and inbound quotation calls for YNM Safety.',
    strategy: [
      'Conducted exhaustive technical SEO & competitor SERP analysis for industrial road safety products',
      'Identified "cold plastic paint manufacturers" as the highest commercial-intent B2B conversion keyword',
      'Architected topical authority around cold plastic road marking paint specifications, durability, and application guides',
      'Optimized metadata, semantic schema markup (Product, Organization, FAQPage), and internal linking silos',
    ],
    execution: [
      'Re-engineered on-page structure: optimized H1/H2 hierarchy, LSI keyword injection, and technical paint property tables',
      'Resolved Core Web Vitals, mobile responsiveness, and crawl budget bottlenecks across all product categories',
      'Created rich authoritative product technical documentation matching commercial procurement search intent',
      'Acquired contextual B2B backlinks and directory citations across verified industrial safety networks',
      'Configured real-time Google Search Console performance monitoring and GA4 conversion tracking',
    ],
    results: [
      'Ranked #1 on Google Search Results Page for "cold plastic paint manufacturers" across India and global search',
      '+340% increase in total Google Search Console organic impressions in 90 days',
      '+180% surge in qualified inbound B2B RFQs, quotation phone calls, and distributor inquiries',
      'Established sustainable organic search pipeline generating zero-cost inbound client inquiries weekly',
    ],
    tools: ['Google Search Console', 'Google Analytics 4', 'Ahrefs', 'Screaming Frog', 'PageSpeed Insights', 'WordPress'],
    websiteUrl: 'https://ynmsafety.com/',
    seoProof: [
      {
        keyword: 'cold plastic paint manufacturers',
        ranking: 'Position #1 (Top Organic Result)',
        page: 'ynmsafety.com/cold-plastic-road-marking-paint',
        note: 'Live proof verified in Google Search Console and Incognito Google Search with rich snippet preview.',
      },
    ],
  },
  'bruno-homes': {
    id: 'bruno-homes',
    number: '02',
    title: 'Bruno Homes — Meta Ads, Google Ads & Marketplace SEO',
    projectLabel: 'Performance Marketing & Omnichannel Growth',
    proofImage: '/case-studies/bruno-ads-performance.jpg',
    meta: [
      { key: 'Industry', value: 'Electric Appliances & Home Products' },
      { key: 'My Role', value: 'Digital Marketing Manager' },
      { key: 'Channels', value: 'Meta Ads, Google Search Ads, Amazon, IndiaMART' },
      { key: 'Performance', value: '4.8x Blended ROAS' },
      { key: 'Duration', value: 'Dec 2024 – Oct 2025' },
      { key: 'Website', value: 'brunohomes.in' },
    ],
    objective:
      'Scale customer acquisition and direct e-commerce sales for Bruno Homes electric & home appliances via high-performance Google & Meta ad campaigns, ManyChat conversational AI automation, and marketplace SEO.',
    strategy: [
      'Constructed full-funnel paid media architecture: Prospecting (TOF), Consideration (MOF), and Dynamic Retargeting (BOF)',
      'Deployed high-intent Google Search Ads capturing active buyers searching for modern kitchen & home appliances',
      'Crafted scroll-stopping lifestyle video and carousel creatives on Instagram & Facebook showcasing product USPs',
      'Implemented automated ManyChat conversational funnel to pre-qualify lead inquiries and trigger instant WhatsApp/DM checkout',
    ],
    execution: [
      'Engineered custom Lookalike & Interest-stacked audiences in Meta Ads Manager with aggressive A/B creative testing',
      'Structured Google Ads with single-theme ad groups, negative keyword exclusions, and automated Target ROAS bidding',
      'Integrated ManyChat chatbot automating 60% of repetitive customer product inquiries and closing orders via automated DM flows',
      'Optimized product listings, keywords, and A+ content across Amazon, Flipkart, and IndiaMART for organic marketplace rank',
    ],
    results: [
      'Achieved 4.8x Blended ROAS across paid advertising spend',
      '42% reduction in Cost Per Acquisition (CPA) on Google Search Ads',
      '60% reduction in manual support handling time via ManyChat AI DM automation',
      'Over ₹18L+ attributed revenue driven through combined Meta and Google Ads channels',
    ],
    tools: ['Meta Ads Manager', 'Google Ads', 'ManyChat AI', 'Google Analytics 4', 'Canva', 'Amazon Seller Central', 'IndiaMART'],
    websiteUrl: 'https://brunohomes.in',
  },
  'platinum-tech': {
    id: 'platinum-tech',
    number: '03',
    title: 'Platinum Technology — Social Media Management & Viral Growth',
    projectLabel: 'Social Media Management & Community Scaling',
    proofImage: '/case-studies/platinum-smm-growth.jpg',
    meta: [
      { key: 'Industry', value: 'IT & Technology Solutions' },
      { key: 'My Role', value: 'Social Media Manager' },
      { key: 'Key Metric', value: '+280% Organic Follower Growth' },
      { key: 'Engagement', value: '5.2x Spike via Viral Reels' },
      { key: 'Platforms', value: 'Instagram, LinkedIn, YouTube' },
      { key: 'Duration', value: 'Jan 2024 – Present' },
    ],
    objective:
      'Transform Platinum Technology’s social media presence from an inactive profile into an authoritative, high-engagement tech brand through viral video reels, Canva AI creative design, and automated community interaction workflows.',
    strategy: [
      'Audited tech audience personas and competitor content to build a high-retention short-form video content strategy',
      'Developed weekly thematic content buckets: Tech breakdowns, problem-solving tips, behind-the-scenes, and industry trends',
      'Implemented AI-assisted visual design pipelines using Canva and ChatGPT for rapid carousel and graphics generation',
      'Designed an active engagement matrix targeting tech founders, developers, and corporate clients',
    ],
    execution: [
      'Scripted, edited, and published high-hook 30-45s Reels optimized with trending audio, punchy captions, and clear CTAs',
      'Deployed automated DM and comment reply triggers ensuring incoming user queries received answers within <3 minutes',
      'Maintained consistent 5x/week posting rhythm timed with peak audience engagement windows',
      'Cross-distributed winning Instagram video content into LinkedIn carousels and YouTube Shorts for amplified reach',
    ],
    results: [
      '+280% organic follower growth within 6 months across Instagram and LinkedIn',
      '5.2x spike in average post engagement and comment interactions',
      'Generated 140+ direct qualified inbound leads via social media DMs and link-in-bio inquiries',
      'Produced 3 viral reels surpassing 120,000+ views organically without paid amplification',
    ],
    tools: ['Instagram Creator Studio', 'LinkedIn Analytics', 'Canva AI', 'CapCut Pro', 'ManyChat', 'Meta Business Suite'],
  },
  'google-ads': {
    id: 'google-ads',
    number: '04',
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
    number: '05',
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

              {/* Verified Proof Image / Dashboard Screenshot */}
              {data.proofImage && (
                <div
                  className="modal__proof-image"
                  onClick={() => setLightboxSrc(data.proofImage!)}
                  style={{ cursor: 'pointer', marginBottom: '32px' }}
                  title="Click to view full-size image"
                >
                  <img
                    src={data.proofImage}
                    alt={`${data.title} Evidence Screenshot`}
                    style={{ width: '100%', display: 'block', borderRadius: '14px 14px 0 0' }}
                  />
                  <div style={{
                    padding: '10px 18px',
                    background: 'var(--color-bg-2)',
                    borderTop: '1px solid rgba(0,0,0,0.06)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.82rem',
                    color: '#64748b'
                  }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="#16a34a"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      Verified Results & Evidence Dashboard
                    </span>
                    <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                      Click to Enlarge ⤢
                    </span>
                  </div>
                </div>
              )}

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

              {/* SEO Proof — Specific Keyword Ranking Breakdown */}
              {data.seoProof && data.seoProof.length > 0 && (
                <div className="modal__section">
                  <div className="modal__section-title">SEO Ranking Proof</div>
                  {data.seoProof.map((proof, i) => (
                    <div key={i}>
                      <div className="modal__meta" style={{ marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                        <div className="modal__meta-item">
                          <span className="modal__meta-key">Targeted Keyword</span>
                          <span className="modal__meta-value">{proof.keyword}</span>
                        </div>
                        <div className="modal__meta-item">
                          <span className="modal__meta-key">Page URL</span>
                          <span className="modal__meta-value">{proof.page}</span>
                        </div>
                        <div className="modal__meta-item">
                          <span className="modal__meta-key">Google Position</span>
                          <span className="modal__meta-value" style={{ color: 'var(--color-primary)', fontWeight: 800 }}>{proof.ranking}</span>
                        </div>
                      </div>
                      <p className="modal__text" style={{ fontSize: '0.85rem', color: 'var(--color-text)', fontStyle: 'italic', marginBottom: '12px' }}>
                        {proof.note}
                      </p>
                    </div>
                  ))}
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
