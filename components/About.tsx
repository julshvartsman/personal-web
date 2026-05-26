export default function About() {
  return (
    <section id="about">
      <div className="section-label">About</div>
      <h2>
        Builder. Analyst.<br />
        Problem solver.
      </h2>
      <div className="about-grid">
        <div className="about-text fade-in">
          <p>
            I&apos;m a <strong>Data Science student at UC Berkeley</strong> (GPA 3.89) specializing in
            Business and Industrial Analytics, with hands-on experience shipping production AI systems
            and full-stack applications.
          </p>
          <p>
            From engineering a <strong>multi-agent AI platform at Oracle</strong> to leading a
            cross-functional team delivering a sustainability dashboard for 8 hospitals in Porto, I
            thrive at the intersection of data, AI, and real-world impact.
          </p>
          <p>
            I care about building things that <strong>actually get used</strong> — not just technically
            sound, but intuitive, fast, and designed for real people.
          </p>
        </div>
        <div className="about-stats fade-in">
          <div className="stat-card">
            <div className="expertise-title">AI Engineering</div>
            <div className="expertise-desc">Multi-agent systems, LLM orchestration &amp; prompt design</div>
          </div>
          <div className="stat-card">
            <div className="expertise-title">Full-Stack Dev</div>
            <div className="expertise-desc">React, Next.js, TypeScript, Supabase &amp; FastAPI</div>
          </div>
          <div className="stat-card">
            <div className="expertise-title">Data Science</div>
            <div className="expertise-desc">Predictive modeling, EDA, sklearn &amp; pandas</div>
          </div>
          <div className="stat-card">
            <div className="expertise-title">Product Delivery</div>
            <div className="expertise-desc">End-to-end builds, consulting &amp; team leadership</div>
          </div>
        </div>
      </div>
    </section>
  )
}
