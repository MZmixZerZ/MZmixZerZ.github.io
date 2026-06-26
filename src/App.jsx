import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Activity from './sections/Activity'
import Education from './sections/Education'
import Contact from './sections/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="activity" element={<Activity />} />
        <Route path="education" element={<Education />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
