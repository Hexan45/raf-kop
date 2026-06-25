import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { About } from "@/components/About"
import { Coverage } from "@/components/Coverage"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export function App() {
  return (
    <div className="min-h-screen" style={{ background: "#0B0B0B" }}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Coverage />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
