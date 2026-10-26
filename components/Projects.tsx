import { projects } from '@/lib/content'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 data-reveal>
        Projects<sup>{projects.length}</sup>
      </h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className={`card${p.wide ? ' card-wide' : ''}${i % 2 ? ' card-flip' : ''}`}
            data-reveal
            data-spotlight
          >
            <div className="card-body">
              <div className="card-top">
                <span className="card-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="meta">{p.context}</span>
              </div>
              <h3>{p.name}</h3>
              {p.description.map((d) => (
                <p key={d}>{d}</p>
              ))}
              <ul className="chips">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            {p.video && (
              <div className="card-media">
                <div className="video" style={{ paddingBottom: p.video.ratio }}>
                  <iframe src={p.video.src} title={`${p.name} demo`} loading="lazy" allowFullScreen />
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
