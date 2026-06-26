import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="container text-center">
        <p className="hero-eyebrow">Hello, I'm</p>
        <h1 className="hero-name">Apirom Phumphung</h1>
        <p className="hero-sub">Computer Science Student · Faculty of Science &amp; Technology</p>
        <p className="hero-school">Huachiew Chalermprakiet University</p>
        <Link to="/projects" className="btn hero-cta mt-4">View My Work</Link>
      </div>
    </section>
  )
}
