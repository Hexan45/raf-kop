import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Shovel, Wind, House, RadioTower } from "lucide-react"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
})

const services = [
  {
    num: "01",
    icon: Shovel,
    title: "USŁUGI MINIKOPARKĄ",
    description:
      "Profesjonalne usługi minikoparką dla inwestycji prywatnych i komercyjnych. Pracujemy w trudno dostępnych miejscach, gdzie standardowe maszyny nie mogą dotrzeć.",
    points: [
      "Wykopy pod fundamenty",
      "Wykopy pod instalacje",
      "Niwelacja terenu",
      "Przygotowanie pod kostkę",
      "Rozbiórki i wyburzenia",
    ],
    imageBg: "rgba(255,193,7,0.03)",
  },
  {
    num: "02",
    icon: Wind,
    title: "PRZECISKI PNEUMATYCZNE (KRET 75mm - 160mm)",
    description:
      "Nowoczesna technologia bezwykopowa — przejścia pod drogami, chodnikami i ogrodzeniami bez naruszania nawierzchni. Szybko, czysto, bez szkód dla otoczenia.",
    points: [
      "Przewierty pod drogami",
      "Przejścia pod ogrodzeniami",
      "Instalacje wodne i gazowe",
      "Kable energetyczne",
      "Minimalna ingerencja w otoczenie",
    ],
    imageBg: "rgba(255,193,7,0.02)",
  },
    {
    num: "03",
    icon: House,
    title: "PRACE ZIEMNE I PRZYDOMOWE",
    description:
      "Kompleksowe roboty ziemne wykonywane dla klientów indywidualnych i firm. Realizujemy prace związane z zagospodarowaniem działek oraz przygotowaniem terenu pod różnego rodzaju inwestycje.",
    points: [
      "Wykopy pod przydomowe oczyszczalnie ścieków",
      "Przygotowanie terenu pod przyłącza",
      "Wyrównywanie i modelowanie terenu",
      "Prace ziemne przy posesjach i ogrodach",
      "Indywidualne usługi koparkowe",
    ],
    imageBg: "rgba(255,193,7,0.02)",
  },
      {
    num: "04",
    icon: RadioTower,
    title: "BUDOWA SIECI I INFRASTRUKTURY",
    description:
      "Wykonujemy roboty związane z budową oraz rozbudową infrastruktury technicznej dla klientów prywatnych, przedsiębiorstw i inwestycji lokalnych.",
    points: [
      "Budowa sieci światłowodowej",
      "Przygotowanie tras pod instalacje",
      "Wykopy pod infrastrukturę techniczną",
      "Układanie przewodów i rur osłonowych",
      "Kompleksowa obsługa inwestycji",
    ],
    imageBg: "rgba(255,193,7,0.02)",
  },
]

export function Services() {
  return (
    <section id="oferta" className="py-32" style={{ background: "#0B0B0B" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div
          {...fadeUp(0)}
          className="text-center mb-20"
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.35em] uppercase mb-4"
            style={{ color: "#FFC107" }}
          >
            Oferta
          </span>
          <h2
            className="text-5xl lg:text-6xl font-black tracking-tight text-white"
          >
            NASZE USŁUGI
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-6"
            style={{ background: "#FFC107" }}
          />
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              {...fadeUp(0.15 * (i + 1))}
              whileHover={{ y: -10, boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 40px rgba(255,193,7,0.08)" }}
              transition={{ duration: 0.35, ease: "easeOut" as const }}
              className="relative flex flex-col p-10 rounded-[24px] overflow-hidden group cursor-default"
              style={{
                background:
                  "linear-gradient(145deg, #121212 0%, #0e0e0e 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                minHeight: 450,
                boxShadow: "0 16px 60px rgba(0,0,0,0.4)",
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[24px]"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,193,7,0.06) 0%, transparent 70%)",
                }}
              />

              {/* Number */}
              <span
                className="text-7xl font-black leading-none select-none absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ color: "#FFC107" }}
              >
                {s.num}
              </span>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shrink-0"
                style={{
                  background: "rgba(255,193,7,0.1)",
                  border: "1px solid rgba(255,193,7,0.25)",
                }}
              >
                <s.icon size={26} style={{ color: "#FFC107" }} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black tracking-wider text-white mb-3">
                {s.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-white/50 leading-relaxed mb-7">
                {s.description}
              </p>

              {/* Points */}
              <ul className="flex flex-col gap-3 flex-1">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3">
                    <CheckCircle2 size={16} style={{ color: "#FFC107", flexShrink: 0 }} />
                    <span className="text-sm text-white/70 font-medium">{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mt-8 transition-all duration-300 group/link"
                style={{ color: "#FFC107" }}
              >
                DOWIEDZ SIĘ WIĘCEJ
                <ArrowRight
                  size={14}
                  className="group-hover/link:translate-x-1 transition-transform duration-300"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
