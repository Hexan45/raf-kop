import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

const areas = [
  "Warszawa i okolice",
  "Całe Mazowsze",
  "Grodzisk Mazowiecki",
  "Pruszków i Piaseczno",
  "Otwock i Legionowo",
  "Wyszków i Płock",
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
})

function PolandMap() {
  return (
    <svg
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Mapa zasięgu RAF-KOP"
    >
      {/* Simple stylized Poland outline */}
      <path
        d="M160 120 L180 90 L220 80 L260 75 L300 78 L340 85 L380 88 L400 100 L420 120 L430 150 L440 185 L435 220 L445 255 L450 290 L440 325 L430 360 L410 385 L390 400 L370 420 L350 440 L325 460 L300 470 L280 475 L260 465 L235 450 L210 430 L190 410 L170 385 L155 355 L148 325 L145 295 L148 265 L150 235 L145 205 L148 175 L155 148 Z"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1.5"
      />
      {/* Mazowsze region highlight */}
      <path
        d="M255 215 L300 208 L345 215 L368 240 L375 275 L365 310 L345 330 L310 340 L275 338 L248 322 L235 295 L232 265 L242 238 Z"
        fill="rgba(255,193,7,0.18)"
        stroke="#FFC107"
        strokeWidth="1.5"
      />
      {/* Mazowsze glow */}
      <path
        d="M255 215 L300 208 L345 215 L368 240 L375 275 L365 310 L345 330 L310 340 L275 338 L248 322 L235 295 L232 265 L242 238 Z"
        fill="url(#mazGlow)"
        opacity="0.5"
      />
      <defs>
        <radialGradient id="mazGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFC107" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFC107" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFC107" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFC107" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Radar rings around Warsaw */}
      <circle cx="300" cy="272" r="35" stroke="rgba(255,193,7,0.35)" strokeWidth="1" fill="none" />
      <circle cx="300" cy="272" r="65" stroke="rgba(255,193,7,0.2)" strokeWidth="1" fill="none" />
      <circle cx="300" cy="272" r="95" stroke="rgba(255,193,7,0.1)" strokeWidth="1" fill="none" />
      {/* Warsaw dot */}
      <circle cx="300" cy="272" r="8" fill="url(#centerGlow)" />
      <circle cx="300" cy="272" r="5" fill="#FFC107" />
      <circle cx="300" cy="272" r="2.5" fill="white" />
      {/* Warsaw label */}
      <text x="314" y="268" fill="#FFC107" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="1">
        WARSZAWA
      </text>
    </svg>
  )
}

export function Coverage() {
  return (
    <section
      id="zasieg"
      className="py-32"
      style={{ background: "#0B0B0B" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <motion.div {...fadeUp(0)} className="flex flex-col gap-8">
          <span
            className="text-xs font-bold tracking-[0.35em] uppercase"
            style={{ color: "#FFC107" }}
          >
            Zasięg
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white"
          >
            DZIAŁAMY NA TERENIE{" "}
            <span style={{ color: "#FFC107" }}>WARSZAWY,</span>{" "}
            <span style={{ color: "#FFC107" }}>MAZOWSZA</span>
            {" "}I OKOLIC
          </h2>
          <p className="text-base text-white/50 leading-relaxed max-w-[440px]">
            Obsługujemy klientów na terenie całego województwa mazowieckiego
            i terenów przyległych. Szybki dojazd, sprawna realizacja.
          </p>
          <ul className="flex flex-col gap-4">
            {areas.map((area, i) => (
              <motion.li
                key={area}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i, ease: "easeOut" as const }}
                className="flex items-center gap-4"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(255,193,7,0.1)",
                    border: "1px solid rgba(255,193,7,0.2)",
                  }}
                >
                  <MapPin size={14} style={{ color: "#FFC107" }} />
                </div>
                <span className="text-sm font-medium text-white/70">{area}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right — Map */}
        <motion.div
          {...fadeUp(0.2)}
          className="relative flex items-center justify-center"
        >
          <div
            className="relative w-full max-w-[500px] aspect-square rounded-[32px] flex items-center justify-center overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,193,7,0.04) 0%, rgba(18,18,18,0) 70%), #111111",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow:
                "0 24px 80px rgba(0,0,0,0.5), 0 0 80px rgba(255,193,7,0.04)",
            }}
          >
            {/* Outer glow */}
            <div
              className="absolute inset-0 rounded-[32px] pointer-events-none"
              style={{
                boxShadow: "inset 0 0 80px rgba(255,193,7,0.04)",
              }}
            />
            <PolandMap />
          </div>

          {/* Label */}
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-6 px-4 py-2.5 rounded-xl"
            style={{
              background: "rgba(255,193,7,0.12)",
              border: "1px solid rgba(255,193,7,0.3)",
            }}
          >
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#FFC107" }}>
              Mazowieckie
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
