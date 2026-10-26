import { skillGroups } from '@/lib/content'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 data-reveal>Skills</h2>
      <p className="hint" data-reveal>Hover a skill to see where I&apos;ve used it.</p>
      <div className="skill-groups">
        {skillGroups.map((g) => (
          <div className="skill-group" key={g.label} data-reveal>
            <h3>{g.label}</h3>
            <ul>
              {g.skills.map((s) => (
                <li key={s.name} className={s.usedIn ? 'skill has-use' : 'skill'} tabIndex={s.usedIn ? 0 : undefined}>
                  {s.name}
                  {s.usedIn && <span className="skill-use" role="tooltip">{s.usedIn}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
