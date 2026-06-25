import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Strona Główna", href: "#home" },
  { label: "Oferta", href: "#oferta" },
  { label: "O Nas", href: "#o-nas" },
  { label: "Zasięg", href: "#zasieg" },
  { label: "Kontakt", href: "#kontakt" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled
          ? "rgba(11,11,11,0.92)"
          : "rgba(11,11,11,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[90px]">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-none select-none">
          <span
            className="text-2xl font-black tracking-widest"
            style={{ color: "#FFC107", letterSpacing: "0.18em" }}
          >
            RAF-KOP
          </span>
          <span className="text-[10px] font-medium tracking-[0.22em] text-white/50 uppercase mt-0.5">
            Usługi Ziemne i Bezwykopowe
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="font-bold tracking-wider uppercase text-xs px-6 py-5 rounded-[14px] transition-all duration-300 hover:scale-105"
            style={{
              background: "#FFC107",
              color: "#0B0B0B",
              boxShadow: "0 0 24px rgba(255,193,7,0.25)",
            }}
          >
            <a href="#kontakt">Darmowa Wycena →</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white/80 hover:text-white"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(11,11,11,0.97)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold tracking-widest uppercase text-white/70 hover:text-white py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="font-bold tracking-wider uppercase text-xs mt-2 rounded-[14px]"
            style={{ background: "#FFC107", color: "#0B0B0B" }}
          >
            <a href="#kontakt" onClick={() => setMobileOpen(false)}>
              Darmowa Wycena →
            </a>
          </Button>
        </motion.div>
      )}
    </motion.header>
  )
}
