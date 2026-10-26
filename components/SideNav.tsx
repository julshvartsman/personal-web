'use client'

import { useEffect, useState } from 'react'

const sections = [
  { id: 'top', label: 'Intro' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
]

export default function SideNav() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <nav className="sidenav" aria-label="Sections">
      {sections.map((s) => (
        <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : undefined}>
          <span className="sidenav-bar" />
          {s.label}
        </a>
      ))}
    </nav>
  )
}
