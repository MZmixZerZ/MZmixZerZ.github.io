import { useEffect } from 'react'

const NAV_LINKS = [
  { id: 'about', label: 'เกี่ยวกับ' },
  { id: 'experience', label: 'ประสบการณ์' },
  { id: 'skills', label: 'ทักษะ' },
  { id: 'projects', label: 'โปรเจกต์' },
  { id: 'activity', label: 'กิจกรรม' },
  { id: 'education', label: 'การศึกษา' },
  { id: 'contact', label: 'ติดต่อ' },
]

const EXPERIENCES = [
  {
    title: 'Game 2D: Fake street fighter (พฤศจิกายน 2023)',
    desc: '- พัฒนาเกมนี้ด้วย HTML โดยใช้ Canvas เป็นโครง\n- เขียนสคริปต์ JavaScript สำหรับการควบคุมการเคลื่อนที่ของตัวละคร ระยะเวลาแต่ละแมตช์ Hitbox และการสรุปผล',
  },
  {
    title: 'PHP: Mah Express (พฤษภาคม 2024)',
    desc: '- ออกแบบและพัฒนาหน้าเว็บด้วย HTML โดยมี Bootstrap ช่วยตกแต่ง\n- ใช้ PhpMyAdmin ในการจัดสรร Database และ HTML ประกอบในการเชื่อมต่อกับฐานข้อมูล',
  },
  {
    title: 'Python: Malware Detection (พฤศจิกายน 2025)',
    desc: '- ออกแบบและพัฒนาหน้าเว็บด้วย HTML\n- ใช้ Python เป็นตัวหลักในการทำงานและใช้ Discord ในการแจ้งเตือนว่าไฟล์นั้นมี Malware หรือไม่',
  },
  {
    title: 'ESP32: Reactor Tester (เมษายน 2025)',
    desc: '- ออกแบบและพัฒนาด้วยภาษา C++\n- ใช้ I2C แสดงจอ I2C และ ESP-NOW ด้วย Serial protocol กับ UART ในการเชื่อมต่อให้บอร์ดทั้ง 2 ตัวสามารถสื่อสารกันได้',
  },
]

const PROJECTS = [
  { title: 'PHP: Mah Express', tech: 'PHP, MySQL, HTML, Bootstrap', url: 'https://github.com/MZmixZerZ/mah-express' },
  { title: 'HTML & JavaScript: Game2D Fake Street Fighter', tech: 'HTML, JavaScript, Canvas', url: 'https://github.com/MZmixZerZ/Game2D-fake-street-fighter' },
  { title: 'Python & HTML: Malware Detection', tech: 'Python, HTML, Discord Bot', url: 'https://github.com/MZmixZerZ/malwareDetection' },
  { title: 'Full Stack Web: Student App & Line API', tech: 'Angular, NestJS, LINE Messaging API, MySQL', url: 'https://github.com/MZmixZerZ/student-app-final' },
]

const EDUCATION = [
  { degree: 'มัธยมศึกษาตอนต้น1-2', school: 'นวมินทราชินูทิศ เตรียมอุดมศึกษาพัฒนาการ', years: '2016–2017' },
  { degree: 'มัธยมศึกษาตอนต้น-ปลาย3-4', school: 'นวมราชานุสรณ์', years: '2018–2019' },
  { degree: 'มัธยมศึกษาตอนปลาย5-6', school: 'นวมินทราชินูทิศ เตรียมอุดมศึกษาพัฒนาการ', years: '2020–2021' },
  { degree: 'ปริญญาตรี วิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์และเทคโนโลยี', school: 'หัวเฉียวเฉลิมพระเกียรติ', years: '2022–ปัจจุบัน' },
]

export default function App() {
  // Fade-in sections on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-section').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Navbar shadow on scroll
  useEffect(() => {
    const nav = document.querySelector('.navbar')
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Portfolio ของ Apirom</a>
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

      <header className="bg-white py-5 mb-5 shadow-sm hero-section">
        <div className="container text-center">
          <h1 className="display-5">สวัสดีครับ, ผมนายอภิรมณ์ พุ่มพวง</h1>
          <p className="lead">นักศึกษาคณะวิทยาศาสตร์และเทคโนโลยี สาขาวิทยาการคอมพิวเตอร์</p>
          <p className="lead">มหาวิทยาลัยหัวเฉียวเฉลิมพระเกียรติ</p>
        </div>
      </header>

      <section id="about" className="container mb-5 fade-section">
        <h2 className="mb-4">เกี่ยวกับผม</h2>
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <img src="/image/image4.jpg" alt="รูปภาพแนะนำตัว" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-8">
            <p>
              ผมเป็นนักศึกษาวิทยาการคอมพิวเตอร์ที่มีความชำนาญในด้านการเขียนโปรแกรม HTML, JavaScript, Python และ PHP
              ตลอด 3 ปีที่เรียนมา และอยากพัฒนาการเขียน React.js และรูปแบบอื่นๆ เพื่อนำไปต่อยอดกับสายงานในอนาคต
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="container mb-5 fade-section">
        <h2 className="mb-4">โปรเจคที่เคยมีส่วนร่วมตอนเรียน</h2>
        <ul className="list-group">
          {EXPERIENCES.map(({ title, desc }) => (
            <li key={title} className="list-group-item">
              <h5>{title}</h5>
              <p style={{ whiteSpace: 'pre-line', marginBottom: 0 }}>{desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="skills" className="container mb-5 fade-section">
        <h2 className="mb-4">ทักษะ</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h5>Hard Skill ด้านการเขียนโปรแกรม</h5>
            <ul>
              {['C / C++', 'Python', 'JavaScript', 'HTML', 'PHP'].map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <h5>Soft Skill ด้านการปรับตัว</h5>
            <ul>
              {[
                'เรียนรู้เทคโนโลยีใหม่ได้อย่างรวดเร็ว',
                'ปรับตัวเข้ากับทีมและสภาพแวดล้อมงาน',
                'แก้ไขปัญหาเฉพาะหน้าได้อย่างมีประสิทธิภาพ',
              ].map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="container mb-5 fade-section">
        <h2 className="mb-4">โปรเจคเด่น</h2>
        <div className="row">
          {PROJECTS.map(({ title, tech, url }) => (
            <div key={title} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{tech}</p>
                  <a href={url} target="_blank" rel="noreferrer" className="stretched-link">ดูโปรเจกต์</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="activity" className="container mb-5 fade-section">
        <h2 className="mb-4">กิจกรรม</h2>
        <ul className="list-unstyled">
          <li className="mb-4">
            <p>กิจกรรมเข้าแคมป์ฝึกการ Pitching จากงาน Startup Thailand League 2025 วันที่ 22 พฤษภาคม 2568</p>
            <img src="/image/image3.jpg" alt="กิจกรรมเข้าแคมป์ฝึกการ Pitching" className="rounded shadow-sm" />
          </li>
          <li>
            <p>เป็นตัวแทนมหาวิทยาลัยไปแข่งขัน Regional Pitching ที่สถาบันการจัดการปัญญาภิวัฒน์ ในงาน Startup Thailand League 2025 วันที่ 15 มิถุนายน 2568</p>
            <div className="d-flex gap-3 flex-wrap">
              <img src="/image/image2.jpg" alt="Regional Pitching 1" className="rounded shadow-sm" />
              <img src="/image/image1.jpg" alt="Regional Pitching 2" className="rounded shadow-sm" />
            </div>
          </li>
        </ul>
      </section>

      <section id="education" className="container mb-5 fade-section">
        <h2 className="mb-4">การศึกษา</h2>
        {EDUCATION.map(({ degree, school, years }) => (
          <p key={degree}><strong>{degree}</strong>, โรงเรียน [{school}] ({years})</p>
        ))}
      </section>

      <section id="contact" className="container mb-5 fade-section">
        <h2 className="mb-4">ติดต่อ</h2>
        <p>
          Email: <a href="mailto:thanktmch@gmail.com">thanktmch@gmail.com</a><br />
          GitHub: <a href="https://github.com/MZmixZerZ" target="_blank" rel="noreferrer">github.com/MZmixZerZ</a>
        </p>
      </section>

      <footer className="bg-white py-4 mt-5 shadow-sm">
        <div className="container text-center">
          <p className="mb-0">© 2025 Portfolio ของ Apriom phumphung. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
