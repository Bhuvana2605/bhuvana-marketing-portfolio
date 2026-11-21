import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { About } from '@/components/sections/about'
import { Experience } from '@/components/sections/experience'
import { Skills } from '@/components/sections/skills'
import { FeaturedWork } from '@/components/sections/featured-work'
import { Workflow } from '@/components/sections/workflow'
import { Contact } from '@/components/sections/contact'
import { PagePreloader } from '@/components/ui/page-preloader'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <PagePreloader />
      <Header />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <FeaturedWork />
      <Workflow />
      <Contact />
      <Footer />
    </main>
  )
}
