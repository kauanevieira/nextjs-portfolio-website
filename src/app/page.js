import Image from 'next/image'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { AboutSection } from './components/AboutSection'
import { ProjectsSelection } from './components/ProjectsSelection'
import { EmailSection } from './components/EmailSection'
import { Footer } from './components/Footer'
import { AchivementsSection } from './components/AchivementsSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchivementsSection />
        <AboutSection />
        <ProjectsSelection />
        <EmailSection />
      </div>
        <Footer />
    </main>
  )
}
