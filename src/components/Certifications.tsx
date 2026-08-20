import { useCallback, useEffect, useState, type MouseEvent, type ReactElement } from 'react'
import { useInView } from '../hooks/useInView'

type Certificate = {
  id: string
  title: string
  imageSrc: string
  imageAlt: string
}

const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Certificate 1',
    imageSrc: '/certification-1.jpg',
    imageAlt: 'Shiva Gokari professional certification',
  },
  {
    id: 'cert-2',
    title: 'Certificate 2',
    imageSrc: '/certification-2.jpg',
    imageAlt: 'Shiva Gokari professional certification (second)',
  },
]

const PANEL_ID = 'certifications-certificate-panel'

type CertificationTabProps = {
  certificateId: string
  label: string
  index: number
  isSelected: boolean
  onTabClick: (e: MouseEvent<HTMLButtonElement>) => void
}

function CertificationTab({
  certificateId,
  label,
  index,
  isSelected,
  onTabClick,
}: CertificationTabProps): ReactElement {
  return (
    <button
      type="button"
      role="tab"
      id={`tab-${certificateId}`}
      data-index={index}
      aria-selected={isSelected}
      aria-controls={PANEL_ID}
      tabIndex={isSelected ? 0 : -1}
      className={`certifications__tab ${isSelected ? 'certifications__tab--active' : ''}`}
      onClick={onTabClick}
    >
      {label}
    </button>
  )
}

export default function Certifications(): ReactElement {
  const { ref, isVisible } = useInView()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % CERTIFICATES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [activeIndex])

  const onTabClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const raw = e.currentTarget.dataset.index
    const idx = raw !== undefined ? Number.parseInt(raw, 10) : NaN
    if (!Number.isFinite(idx) || idx < 0 || idx >= CERTIFICATES.length) return
    setActiveIndex(idx)
  }, [])

  const first = CERTIFICATES[0]
  const active = CERTIFICATES[activeIndex] ?? first
  if (!first || !active) {
    return <section className="certifications section" id="certifications" ref={ref} />
  }

  return (
    <section className="certifications section" id="certifications" ref={ref}>
      <div className={`container ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <h2 className="section__title">Certifications</h2>
        <p className="certifications__intro">
          Choose a tab to view that certificate. Only the selected certificate is displayed.
        </p>

        <div className="certifications__layout">
          <div className="certifications__tabs" role="tablist" aria-label="Certificates">
            {CERTIFICATES.map((cert, index) => (
              <CertificationTab
                key={cert.id}
                certificateId={cert.id}
                label={cert.title}
                index={index}
                isSelected={index === activeIndex}
                onTabClick={onTabClick}
              />
            ))}
          </div>

          <div
            className="certifications__panel"
            role="tabpanel"
            id={PANEL_ID}
            aria-labelledby={`tab-${active.id}`}
          >
            <div className="certifications__frame">
              <img
                src={active.imageSrc}
                alt={active.imageAlt}
                className="certifications__image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
