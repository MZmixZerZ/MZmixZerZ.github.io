import { NavLink } from 'react-router-dom'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/activity', label: 'Activity' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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
          <NavLink className="navbar-brand fw-bold" to="/">Apirom</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to} className="nav-item">
                  <NavLink
                    className={({ isActive }) => `nav-link${isActive ? ' active-link' : ''}`}
                    to={to}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <main key={pathname} className="page-enter">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p className="mb-0">© 2025 Apirom Phumphung. All rights reserved.</p>
      </footer>
    </>
  )
}
