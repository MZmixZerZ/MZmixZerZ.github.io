const ACTIVITIES = [
  {
    desc: 'Attended a pitching camp at',
    event: 'Startup Thailand League 2025',
    date: 'May 22, 2025',
    images: [{ src: '/image/image3.jpg', alt: 'Pitching camp' }],
  },
  {
    desc: 'Represented the university at regional pitching at Panyapiwat Institute of Management —',
    event: 'Startup Thailand League 2025',
    date: 'June 15, 2025',
    images: [
      { src: '/image/image2.jpg', alt: 'Regional Pitching' },
      { src: '/image/image1.jpg', alt: 'Regional Pitching' },
    ],
  },
]

export default function Activity() {
  return (
    <section id="activity" className="section-activity fade-section">
      <div className="container">
        <h2 className="section-title">Activities</h2>
        <ul className="list-unstyled activity-list">
          {ACTIVITIES.map(({ desc, event, date, images }) => (
            <li key={event} className="activity-item">
              <p className="activity-desc">
                {desc} <strong>{event}</strong> — {date}
              </p>
              <div className="activity-images">
                {images.map(img => (
                  <img key={img.src} src={img.src} alt={img.alt} className="rounded-3 shadow-sm" />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
