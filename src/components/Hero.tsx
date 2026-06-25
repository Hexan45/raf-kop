import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Crosshair, ShieldCheck, Clock } from "lucide-react"

const features = [
  {
    icon: Crosshair,
    title: "PRECYZJA",
    desc: "Dokładność w każdym etapie prac.",
  },
  {
    icon: ShieldCheck,
    title: "BEZPIECZEŃSTWO",
    desc: "Nowoczesne technologie i doświadczenie.",
  },
  {
    icon: Clock,
    title: "TERMINOWOŚĆ",
    desc: "Realizacja zleceń na czas.",
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
})

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,193,7,0.04) 0%, transparent 60%), linear-gradient(160deg, #0B0B0B 0%, #121212 100%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center pt-[90px]">
        {/* Left */}
        <div className="flex flex-col gap-8 py-16">
          <motion.div {...fadeUp(0.1)}>
            <span
              className="inline-block text-xs font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full border"
              style={{
                color: "#FFC107",
                borderColor: "rgba(255,193,7,0.3)",
                background: "rgba(255,193,7,0.06)",
              }}
            >
              Usługi Minikoparką i Technologie Bezwykopowe
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-black leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(64px, 7vw, 100px)", fontWeight: 900 }}
          >
            <span className="text-white block">PRECYZJA</span>
            <span className="block" style={{ color: "#FFC107" }}>
              POD ZIEMIĄ.
            </span>
          </motion.h1>

          <motion.div {...fadeUp(0.3)} className="flex flex-col gap-3">
            <p className="text-lg font-medium text-white/80 tracking-wide">
              Technologia, doświadczenie, niezawodność.
            </p>
            <p className="text-base text-white/50 leading-relaxed max-w-[500px]">
              Specjalizujemy się w usługach minikoparką oraz bezwykopowych
              przeciskach pneumatycznych (kret) dla klientów indywidualnych
              i firm na terenie Mazowsza.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="flex gap-4 flex-wrap">
            <Button
              asChild
              className="font-bold tracking-wider uppercase text-sm px-8 py-6 rounded-[14px] hover:scale-105 transition-all duration-300"
              style={{
                background: "#FFC107",
                color: "#0B0B0B",
                boxShadow: "0 4px 32px rgba(255,193,7,0.3)",
              }}
            >
              <a href="#kontakt">Darmowa Wycena</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-bold tracking-wider uppercase text-sm px-8 py-6 rounded-[14px] hover:scale-105 transition-all duration-300"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                color: "white",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <a href="#oferta">Zobacz Ofertę</a>
            </Button>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-col sm:flex-row gap-6 pt-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <div
                  className="mt-0.5 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(255,193,7,0.1)",
                    border: "1px solid rgba(255,193,7,0.25)",
                  }}
                >
                  <Icon size={16} style={{ color: "#FFC107" }} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-white/90">
                    {title}
                  </p>
                  <p className="text-xs text-white/40 mt-0.5 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — machine image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Glow behind image */}
          <div
            className="absolute inset-0 rounded-[40px]"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at center, rgba(255,193,7,0.08) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          {/* Tech lines decoration */}
          <div
            className="absolute top-8 right-8 w-32 h-32 rounded-full"
            style={{
              border: "1px solid rgba(255,193,7,0.1)",
              boxShadow: "0 0 60px rgba(255,193,7,0.05)",
            }}
          />
          <div
            className="absolute top-16 right-16 w-16 h-16 rounded-full"
            style={{ border: "1px solid rgba(255,193,7,0.15)" }}
          />

          <img
            src="/hero-excavator.webp"
            alt="Minikoparka RAF-KOP"
            className="relative z-10 w-full max-w-[600px] rounded-[32px] object-cover"
            style={{
              aspectRatio: "4/3",
              boxShadow:
                "0 40px 120px rgba(0,0,0,0.7), 0 0 60px rgba(255,193,7,0.08)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          />

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-4 z-20 px-5 py-3 rounded-2xl"
            style={{
              background: "rgba(11,11,11,0.9)",
              border: "1px solid rgba(255,193,7,0.3)",
              backdropFilter: "blur(16px)",
            }}
          >
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#FFC107" }}>
              8+ Lat
            </p>
            <p className="text-white/60 text-xs mt-0.5">Doświadczenia</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-8 left-8 z-20 px-5 py-3 rounded-2xl"
            style={{
              background: "rgba(11,11,11,0.9)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(16px)",
            }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-white">
              100+
            </p>
            <p className="text-white/50 text-xs mt-0.5">Realizacji</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #0B0B0B)",
        }}
      />
    </section>
  )
}
