import { useInView } from '../hooks/useInView'

const education = [
  {
    degree: 'Certified in Digital Marketing',
    institution: 'Tek Academy, Hyderabad',
    year: '',
    logo: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
    ),
  },
  {
    degree: 'B.A. (Bachelor of Arts)',
    institution: 'Government City College, Osmania University, Hyderabad',
    year: '2023',
    logo: '/college-logo.jpg',
    icon: null,
  },
  {
    degree: 'Intermediate (10+2)',
    institution: 'Model Junior College, Hyderabad',
    year: '2019',
    logo: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
    ),
  },
  {
    degree: 'SSC (Matriculation)',
    institution: 'BVN High School, Hyderabad',
    year: '2017',
    logo: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
    ),
  },
]

export default function Education() {
  const { ref, isVisible } = useInView()

  return (
    <section className="education section" id="education" ref={ref}>
      <div className={`container ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <h2 className="section__title">Education</h2>
        <div className="education__grid">
          {education.map((edu, i) => (
            <div className="education__card" key={i}>
              <div className="education__icon">
                {edu.logo ? (
                  <img src={edu.logo} alt={edu.institution} className="education__logo-img" />
                ) : (
                  edu.icon
                )}
              </div>
              <div className="education__info">
                <h3>{edu.degree}</h3>
                <p className="education__institution">{edu.institution}</p>
                {edu.year && <span className="education__year">{edu.year}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
