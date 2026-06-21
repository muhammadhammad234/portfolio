import Header from '@/components/header'
import ScrollProgress from '@/components/scroll-progress'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <ScrollProgress />
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    )
}
