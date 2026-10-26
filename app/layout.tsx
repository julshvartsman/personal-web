import type { Metadata } from 'next'
import { Newsreader, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = JetBrains_Mono({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Julia Shvartsman',
  description:
    'Data Science at UC Berkeley. I build LLM systems and full-stack software — most recently at Capital One and Oracle.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Set theme before paint: saved choice, else system preference */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
