import Image from 'next/image'

export default function Hero() {
  return (
    <div id="hero" style={{ position: 'relative' }}>
      <div className="hero-inner">
        <div className="hero-text">
          <h1>
            Data Scientist<br />
            &amp; <em>AI Engineer</em><br />
            at Berkeley
          </h1>
          <p className="hero-sub">
            Building intelligent systems and full-stack platforms that turn complex data into real decisions.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
        <div className="hero-photo fade-in">
          <Image
            src="/headshot.jpg"
            alt="Julia Shvartsman"
            width={500}
            height={500}
            className="headshot"
            priority
          />
        </div>
      </div>
      <div className="hero-scroll">Scroll</div>
    </div>
  )
}
