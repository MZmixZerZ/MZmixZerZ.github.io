import { useEffect } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Activity from './sections/Activity'
import Education from './sections/Education'
import Contact from './sections/Contact'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'activity', label: 'Activity' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-section').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const nav = document.querySelector('.site-nav')
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className="site-nav navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Apirom</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id} className="nav-item">
                  <a className="nav-link" href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Activity />
      <Education />
      <Contact />

      <footer className="site-footer">
        <p className="mb-0">© 2025 Apirom Phumphung. All rights reserved.</p>
      </footer>
    </>
  )
}
