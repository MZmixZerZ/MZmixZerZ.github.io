export default function Contact() {
  return (
    <section id="contact" className="section-contact fade-section">
      <div className="container text-center">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-sub">I'm open to opportunities, collaborations, or just a chat.</p>
        <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
          <a href="mailto:thanktmch@gmail.com" className="contact-link">
            <span className="contact-icon">✉</span> thanktmch@gmail.com
          </a>
          <a href="https://github.com/MZmixZerZ" target="_blank" rel="noreferrer" className="contact-link">
            <span className="contact-icon">⌥</span> github.com/MZmixZerZ
          </a>
        </div>
      </div>
    </section>
  )
}
