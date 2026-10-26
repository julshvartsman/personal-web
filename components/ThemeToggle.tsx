'use client'

import type { MouseEvent } from 'react'

export default function ThemeToggle() {
  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    const apply = () => {
      root.setAttribute('data-theme', next)
      localStorage.setItem('theme', next)
    }

    // Circular wipe out from the button, where supported
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!doc.startViewTransition || reduced) return apply()
    root.style.setProperty('--vt-x', `${e.clientX}px`)
    root.style.setProperty('--vt-y', `${e.clientY}px`)
    doc.startViewTransition(apply)
  }

  return (
    <button onClick={toggle} className="theme-toggle" aria-label="Toggle dark mode">
      <svg className="icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg className="icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />
      </svg>
    </button>
  )
}
