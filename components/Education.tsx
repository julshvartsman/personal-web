import { coursework } from '@/lib/content'

export default function Education() {
  return (
    <section className="section" id="education">
      <h2 data-reveal>Education</h2>
      <div className="edu" data-reveal data-spotlight>
        <div className="entry-head">
          <h3>University of California, Berkeley</h3>
          <span className="meta">GPA 3.87</span>
        </div>
        <p className="entry-role">
          B.A. Data Science, Business &amp; Industrial Analytics{' '}
          <span className="faint">· College of Computing &amp; Data Science</span>
        </p>
        <ul className="chips chips-soft">
          {coursework.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
