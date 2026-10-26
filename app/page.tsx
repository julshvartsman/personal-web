import Intro from '@/components/Intro'
import SideNav from '@/components/SideNav'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Footer from '@/components/Footer'
import Effects from '@/components/Effects'

export default function Home() {
  return (
    <>
      <Effects />
      <SideNav />
      <Intro />
      <main className="page">
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </main>
    </>
  )
}
