'use client'

import { useEffect, useRef } from 'react'

// A grid of dots that ripples slowly and bulges away from the cursor.
export default function DotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const GAP = 26
    const RADIUS = 160
    let w = 0
    let h = 0
    let raf = 0
    let visible = true
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 }
    let colors = { dot: '#000', hot: '#000' }

    const readColors = () => {
      const s = getComputedStyle(document.documentElement)
      colors = { dot: s.getPropertyValue('--dot').trim(), hot: s.getPropertyValue('--accent').trim() }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      mouse.x += (mouse.tx - mouse.x) * 0.12
      mouse.y += (mouse.ty - mouse.y) * 0.12

      for (let x = GAP / 2; x < w; x += GAP) {
        for (let y = GAP / 2; y < h; y += GAP) {
          const wave = reduced ? 0 : Math.sin(x * 0.012 + y * 0.008 + t * 0.0009) * 0.5 + 0.5
          const dx = x - mouse.x
          const dy = y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const pull = Math.max(0, 1 - dist / RADIUS)
          // Ease dots aside like a lens; size and brightness barely change so text stays readable
          const push = Math.sin(pull * Math.PI) * 10
          const px = dist > 0 ? x + (dx / dist) * push : x
          const py = dist > 0 ? y + (dy / dist) * push : y
          const r = 0.9 + wave * 0.3 + pull * 0.4

          ctx.globalAlpha = 0.3 + wave * 0.2 + pull * 0.15
          ctx.fillStyle = pull > 0.15 ? colors.hot : colors.dot
          ctx.beginPath()
          ctx.arc(px, py, r, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
      if (!reduced && visible) raf = requestAnimationFrame(draw)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.tx = e.clientX - rect.left
      mouse.ty = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.tx = -9999
      mouse.ty = -9999
    }

    readColors()
    resize()
    raf = requestAnimationFrame(draw)

    const themeObs = new MutationObserver(() => {
      readColors()
      if (reduced) requestAnimationFrame(draw)
    })
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    // Stop animating once the hero scrolls out of view
    const viewObs = new IntersectionObserver(([entry]) => {
      const was = visible
      visible = entry.isIntersecting
      if (visible && !was && !reduced) raf = requestAnimationFrame(draw)
    })
    viewObs.observe(canvas)

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    document.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      themeObs.disconnect()
      viewObs.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="dotfield" aria-hidden="true" />
}
