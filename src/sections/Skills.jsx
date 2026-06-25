const HARD = ['C / C++', 'Python', 'JavaScript', 'HTML', 'PHP']
const SOFT = [
  'Quick learner — picks up new tech fast',
  'Adaptable in team environments',
  'Effective on-the-spot problem solver',
]

export default function Skills() {
  return (
    <section id="skills" className="section-skills fade-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="row">
          <div className="col-md-6 mb-5">
            <h5 className="skills-cat">Programming Languages</h5>
            <div className="d-flex flex-wrap gap-2 mt-3">
              {HARD.map(s => <span key={s} className="skill-badge">{s}</span>)}
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <h5 className="skills-cat">Soft Skills</h5>
            <ul className="skills-soft mt-3">
              {SOFT.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
