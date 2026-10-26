import { jobs } from '@/lib/content'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 data-reveal>
        Experience<sup>{jobs.length}</sup>
      </h2>
      <ol className="timeline" data-timeline>
        <span className="timeline-line" aria-hidden="true" />
        {jobs.map((job) => (
          <li className="tl-item" key={job.company} data-reveal>
            <span className="tl-dot" aria-hidden="true" />
            <div className="entry-head">
              <h3>{job.company}</h3>
              <span className="meta">{job.dates}</span>
            </div>
            <p className="entry-role">
              {job.role} <span className="faint">· {job.location}</span>
            </p>
            <ul className="points">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <ul className="chips">
              {job.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
