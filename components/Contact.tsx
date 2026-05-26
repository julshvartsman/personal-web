export default function Contact() {
  return (
    <div id="contact">
      <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
        Contact
      </div>
      <h2>
        Let&apos;s work<br />
        <em>together</em>
      </h2>
      <p>Always open to interesting projects, research, and conversations.</p>
      <div className="contact-links">
        <a href="mailto:julia_shvartsman@berkeley.edu" className="btn btn-primary">
          Send Email
        </a>
        <a
          href="https://www.linkedin.com/in/julia-shvartsman-4a89692ab/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}
