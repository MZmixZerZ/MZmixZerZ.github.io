const EDUCATION = [
  { degree: 'Lower Secondary (Grade 7–8)', school: 'Nawaminthrachinuthit Triam Udom Suksapattanakarn', years: '2016–2017' },
  { degree: 'Lower–Upper Secondary (Grade 9–10)', school: 'Nawamrajanusorn', years: '2018–2019' },
  { degree: 'Upper Secondary (Grade 11–12)', school: 'Nawaminthrachinuthit Triam Udom Suksapattanakarn', years: '2020–2021' },
  { degree: 'B.Sc. Computer Science, Faculty of Science & Technology', school: 'Huachiew Chalermprakiet University', years: '2022–Present' },
]

export default function Education() {
  return (
    <section id="education" className="section-education fade-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="edu-timeline">
          {EDUCATION.map(({ degree, school, years }) => (
            <div key={degree} className="edu-item">
              <div className="edu-dot" />
              <div className="edu-content">
                <span className="edu-years">{years}</span>
                <strong className="edu-degree">{degree}</strong>
                <span className="edu-school">{school}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
