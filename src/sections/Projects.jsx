const PROJECTS = [
  { title: 'Full stack: Stock trading game simulation', tech: 'React.js · Node.js · Supabase · JavaScript', url: 'https://github.com/MZmixZerZ/trading-game' },
  { title: 'Full stack: HCU Complaint management system', tech: 'React.js · Node.js · Firebase · JavaScript', url: 'https://github.com/MZmixZerZ/report-hcu' },
  { title: 'Python: Malware Detection', tech: 'Python · HTML · Discord Bot', url: 'https://github.com/MZmixZerZ/malwareDetection' },
  { title: 'Frontend: Game2D-fake-street-fighter', tech: 'HTML · CSS · JavaScript', url: 'https://github.com/MZmixZerZ/Game2D-fake-street-fighter' },
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
