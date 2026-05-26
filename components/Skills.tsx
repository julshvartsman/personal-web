export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">Skills</div>
      <h2>What I work with</h2>
      <div className="skills-grid">

        <div className="skill-group fade-in">
          <h3>Languages</h3>
          <ul className="skill-list">
            <li>Python</li>
            <li>SQL</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="skill-group fade-in">
          <h3>Frameworks &amp; Tools</h3>
          <ul className="skill-list">
            <li>React / Next.js</li>
            <li>FastAPI</li>
            <li>Supabase</li>
            <li>GCP</li>
            <li>Git / GitHub</li>
          </ul>
        </div>

        <div className="skill-group fade-in">
          <h3>AI / ML</h3>
          <ul className="skill-list">
            <li>Multi-Agent Orchestration</li>
            <li>Prompt Engineering</li>
            <li>sklearn / pandas</li>
            <li>CrewAI</li>
            <li>Gemini / OpenAI APIs</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
