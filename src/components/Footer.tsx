import { Globe, Share2, ExternalLink, Phone, Mail, MapPin } from "lucide-react"

const navLinks = [
  { label: "Strona Główna", href: "#home" },
  { label: "Oferta", href: "#oferta" },
  { label: "O Nas", href: "#o-nas" },
  { label: "Zasięg", href: "#zasieg" },
  { label: "Kontakt", href: "#kontakt" },
]

const services = [
  "Usługi minikoparką",
  "Wykopy pod fundamenty",
  "Przeciski pneumatyczne",
  "Instalacje bezwykopowe",
  "Niwelacja terenu",
]

const social = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: Share2, href: "#", label: "Instagram" },
  { icon: ExternalLink, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer
      className="pt-20 pb-10"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[2fr_1fr_1fr_2fr] gap-12 pb-16 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div>
              <span
                className="text-2xl font-black tracking-widest block"
                style={{ color: "#FFC107", letterSpacing: "0.18em" }}
              >
                RAF-KOP
              </span>
              <span className="text-[10px] font-medium tracking-[0.22em] text-white/30 uppercase">
                Usługi Ziemne i Bezwykopowe
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-[280px]">
              Profesjonalne usługi minikoparką i technologie bezwykopowe na
              terenie Mazowsza i okolic.
            </p>
            <div className="flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(255,193,7,0.1)",
                    border: "1px solid rgba(255,193,7,0.2)",
                  }}
                >
                  <Icon size={16} style={{ color: "#FFC107" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-6">
              Nawigacja
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-6">
              Usługi
            </p>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#oferta"
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-6">
              Kontakt
            </p>
            <div className="flex flex-col gap-5">
              <a
                href="tel:+48600123456"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300"
              >
                <Phone size={15} style={{ color: "#FFC107" }} />
                +48 600 123 456
              </a>
              <a
                href="mailto:biuro@raf-kop.pl"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300"
              >
                <Mail size={15} style={{ color: "#FFC107" }} />
                biuro@raf-kop.pl
              </a>
              <span className="flex items-center gap-3 text-sm text-white/50">
                <MapPin size={15} style={{ color: "#FFC107" }} />
                Mazowieckie i okolice
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} RAF-KOP. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-white/15">
            Usługi ziemne i bezwykopowe · Mazowsze
          </p>
        </div>
      </div>
    </footer>
  )
}
