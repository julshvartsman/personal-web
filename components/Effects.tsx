'use client'

import { useEffect } from 'react'

// Page-wide scroll and pointer effects: reveal-on-scroll, the self-drawing
// timeline, the reading progress bar, and the cursor spotlight on cards.
export default function Effects() {
  useEffect(() => {
    const root = document.documentElement

    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            revealObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => revealObs.observe(el))

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        const vh = window.innerHeight
        const max = root.scrollHeight - vh
        root.style.setProperty('--scroll', String(max > 0 ? window.scrollY / max : 0))

        document.querySelectorAll<HTMLElement>('[data-timeline]').forEach((tl) => {
          const r = tl.getBoundingClientRect()
          const p = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height))
          tl.style.setProperty('--progress', String(p))
          tl.querySelectorAll<HTMLElement>('.tl-item').forEach((item) => {
            item.classList.toggle('passed', item.getBoundingClientRect().top < vh * 0.6)
          })
        })
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    const onPointer = (e: PointerEvent) => {
      const card = (e.target as Element).closest?.<HTMLElement>('[data-spotlight]')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onPointer)

    return () => {
      revealObs.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      document.removeEventListener('pointermove', onPointer)
    }
  }, [])

  return <div className="progress" aria-hidden="true" />
}
