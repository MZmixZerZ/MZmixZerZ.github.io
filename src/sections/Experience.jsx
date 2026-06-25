const EXPERIENCES = [
  {
    title: 'Game 2D: Fake Street Fighter',
    date: 'November 2023',
    desc: 'Developed using HTML with Canvas as the core structure. Wrote JavaScript for character movement, match timer, hitbox system, and result display.',
  },
  {
    title: 'PHP: Mah Express',
    date: 'May 2024',
    desc: 'Designed and built the front-end with HTML and Bootstrap. Used PhpMyAdmin to manage the database and PHP to connect it to the interface.',
  },
  {
    title: 'Python: Malware Detection',
    date: 'November 2025',
    desc: 'Built the interface with HTML. Used Python as the detection engine with a Discord bot to send real-time malware alerts.',
  },
  {
    title: 'ESP32: Reactor Tester',
    date: 'April 2025',
    desc: 'Developed in C++. Used I2C for display output and ESP-NOW with UART/Serial protocol to enable communication between two ESP32 boards.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-experience fade-section">
      <div className="container">
        <h2 className="section-title">Academic Projects</h2>
        <div className="exp-list">
          {EXPERIENCES.map(({ title, date, desc }) => (
            <div key={title} className="exp-item">
              <div className="exp-header">
                <h5 className="exp-title">{title}</h5>
                <span className="exp-date">{date}</span>
              </div>
              <p className="exp-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
