import Image from 'next/image'
import DotField from './DotField'
import ThemeToggle from './ThemeToggle'

const NAME = 'Julia Shvartsman'
const BUILDS = ['LLM pipelines', 'multi-agent systems', 'eval frameworks', 'full-stack apps']

export default function Intro() {
  return (
    <header className="intro" id="top">
      <DotField />

      <div className="intro-inner">
        <div className="intro-top">
          <div className="avatar">
            <Image src="/headshot.jpg" alt="Julia Shvartsman" width={160} height={160} priority />
          </div>
          <ThemeToggle />
        </div>

        <p className="status rise" style={{ '--d': '0ms' } as React.CSSProperties}>
          <span className="status-dot" />
          Data Science @ UC Berkeley · prev. SWE intern @ Capital One
        </p>

        <h1 aria-label={NAME}>
          {NAME.split('').map((ch, i) => (
            <span key={i} className="letter" style={{ '--i': i } as React.CSSProperties} aria-hidden="true">
              {ch === ' ' ? ' ' : ch}
            </span>
          ))}
        </h1>

        <p className="tagline rise" style={{ '--d': '500ms' } as React.CSSProperties}>
          I build{' '}
          <span className="rotator">
            <span className="rotator-track">
              {[...BUILDS, BUILDS[0]].map((b, i) => (
                <span key={i}>{b}</span>
              ))}
            </span>
          </span>
        </p>

        <div className="intro-body rise" style={{ '--d': '650ms' } as React.CSSProperties}>
          <p>
            This summer I was a software engineering intern at <strong>Capital One</strong>, building
            AI tooling that gathers incident context for on-call engineers. Before that I built a
            multi-agent research platform for account executives at <strong>Oracle</strong>, and led a
            team shipping a sustainability data platform for eight hospitals in Porto.
          </p>
          <p>
            I care about building things that actually get used, and lately I&apos;ve been
            spending a lot of time on the UI side of that.
          </p>
        </div>

        <ul className="links rise" style={{ '--d': '800ms' } as React.CSSProperties}>
          <li>
            <a className="pill pill-solid" href="mailto:julia_shvartsman@berkeley.edu">
              Email me <span className="arrow">→</span>
            </a>
          </li>
          <li>
            <a className="pill" href="https://www.linkedin.com/in/julia-shvartsman-4a89692ab/" target="_blank" rel="noopener noreferrer">
              LinkedIn <span className="arrow">↗</span>
            </a>
          </li>
          <li>
            <a className="pill" href="https://github.com/julshvartsman" target="_blank" rel="noopener noreferrer">
              GitHub <span className="arrow">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
