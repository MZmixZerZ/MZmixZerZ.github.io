const PROJECTS = [
  { title: 'PHP: Mah Express', tech: 'PHP · MySQL · HTML · Bootstrap', url: 'https://github.com/MZmixZerZ/mah-express' },
  { title: 'Game 2D: Fake Street Fighter', tech: 'HTML · JavaScript · Canvas', url: 'https://github.com/MZmixZerZ/Game2D-fake-street-fighter' },
  { title: 'Python: Malware Detection', tech: 'Python · HTML · Discord Bot', url: 'https://github.com/MZmixZerZ/malwareDetection' },
  { title: 'Full Stack: Student App & LINE API', tech: 'Angular · NestJS · LINE Messaging API · MySQL', url: 'https://github.com/MZmixZerZ/student-app-final' },
]

export default function Projects() {
  return (
    <section id="projects" className="section-projects fade-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="row">
          {PROJECTS.map(({ title, tech, url }) => (
            <div key={title} className="col-md-6 mb-4">
              <a href={url} target="_blank" rel="noreferrer" className="project-card">
                <h5 className="project-title">{title}</h5>
                <p className="project-tech">{tech}</p>
                <span className="project-cta">View on GitHub →</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
