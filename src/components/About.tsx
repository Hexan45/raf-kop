import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, Cpu, Trophy, Users } from "lucide-react"

const stats = [
  { icon: Star, value: 8, suffix: "+", label: "LAT DOŚWIADCZENIA" },
  { icon: Cpu, value: 15, suffix: "+", label: "NOWOCZESNYCH MASZYN" },
  { icon: Trophy, value: 100, suffix: "%", label: "ZAANGAŻOWANIA" },
  { icon: Users, value: 100, suffix: "+", label: "ZADOWOLONYCH KLIENTÓW" },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
})

export function About() {
  return (
    <section
      id="o-nas"
      className="py-32"
      style={{
        background:
          "linear-gradient(160deg, #0e0e0e 0%, #0B0B0B 50%, #0e0e0e 100%)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <motion.div {...fadeUp(0)} className="flex flex-col gap-8">
          <div>
            <span
              className="text-xs font-bold tracking-[0.35em] uppercase"
              style={{ color: "#FFC107" }}
            >
              O Nas
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white"
          >
            DOŚWIADCZENIE,
            <br />
            NA KTÓRE MOŻESZ{" "}
            <span style={{ color: "#FFC107" }}>LICZYĆ.</span>
          </h2>
          <p className="text-base text-white/50 leading-relaxed max-w-[480px]">
            Firma RAF-KOP działa od ponad 8 lat na rynku usług ziemnych i
            bezwykopowych. Nasz zespół to wykwalifikowani specjaliści z pasją
            do precyzji i nowoczesnych technologii. Realizujemy zlecenia dla
            klientów indywidualnych, deweloperów i firm budowlanych.
          </p>
          <p className="text-base text-white/50 leading-relaxed max-w-[480px]">
            Inwestujemy w najnowocześniejszy sprzęt, by każda realizacja
            spełniała najwyższe standardy jakości i bezpieczeństwa. Działamy
            szybko, precyzyjnie i zawsze na czas.
          </p>
          <Button
            asChild
            variant="outline"
            className="self-start font-bold tracking-wider uppercase text-sm px-8 py-6 rounded-[14px] hover:scale-105 transition-all duration-300"
            style={{
              borderColor: "#FFC107",
              color: "#FFC107",
              background: "transparent",
            }}
          >
            <a href="#kontakt">POZNAJ NAS LEPIEJ →</a>
          </Button>
        </motion.div>

        {/* Right — Stats card */}
        <motion.div
          {...fadeUp(0.2)}
          className="rounded-[24px] p-10 grid grid-cols-2 gap-8"
          style={{
            background:
              "linear-gradient(135deg, #141414 0%, #111111 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: "easeOut" as const }}
              className="flex flex-col gap-3 p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(255,193,7,0.1)",
                  border: "1px solid rgba(255,193,7,0.2)",
                }}
              >
                <stat.icon size={18} style={{ color: "#FFC107" }} />
              </div>
              <div
                className="text-4xl font-black leading-none"
                style={{ color: "#FFC107" }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
