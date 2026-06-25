import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 600 123 456",
    href: "tel:+48600123456",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "biuro@raf-kop.pl",
    href: "mailto:biuro@raf-kop.pl",
  },
  {
    icon: Clock,
    label: "Godziny pracy",
    value: "Pon – Pt  7:00 – 18:00",
    href: null,
  },
  {
    icon: MapPin,
    label: "Obszar działania",
    value: "Mazowieckie i okolice",
    href: null,
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
})

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section
      id="kontakt"
      className="py-32"
      style={{
        background:
          "linear-gradient(160deg, #0e0e0e 0%, #0B0B0B 100%)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <span
            className="text-xs font-bold tracking-[0.35em] uppercase mb-4 block"
            style={{ color: "#FFC107" }}
          >
            Kontakt
          </span>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight text-white">
            SKONTAKTUJ SIĘ
            <br />
            Z NAMI
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-6"
            style={{ background: "#FFC107" }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-start">
          {/* Left — contact details */}
          <motion.div {...fadeUp(0.1)} className="flex flex-col gap-8">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(255,193,7,0.1)",
                    border: "1px solid rgba(255,193,7,0.25)",
                  }}
                >
                  <Icon size={20} style={{ color: "#FFC107" }} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-lg font-semibold text-white hover:text-[#FFC107] transition-colors duration-300"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.div
            {...fadeUp(0.2)}
            className="rounded-[24px] p-10"
            style={{
              background:
                "linear-gradient(145deg, #141414 0%, #111111 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-white/40">
                    Imię i nazwisko
                  </label>
                  <Input
                    required
                    placeholder="Jan Kowalski"
                    className="h-[60px] rounded-xl text-sm font-medium placeholder:text-white/20"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-white/40">
                    Telefon
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+48 600 000 000"
                    className="h-[60px] rounded-xl text-sm font-medium placeholder:text-white/20"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest uppercase text-white/40">
                  E-mail
                </label>
                <Input
                  required
                  type="email"
                  placeholder="twoj@email.pl"
                  className="h-[60px] rounded-xl text-sm font-medium placeholder:text-white/20"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest uppercase text-white/40">
                  Wiadomość
                </label>
                <Textarea
                  required
                  placeholder="Opisz swoje zlecenie..."
                  rows={5}
                  className="rounded-xl text-sm font-medium placeholder:text-white/20 resize-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                    minHeight: 140,
                  }}
                />
              </div>

              <Button
                type="submit"
                className="w-full h-[60px] font-black tracking-widest uppercase text-sm rounded-[14px] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                style={{
                  background: sent ? "rgba(34,197,94,0.9)" : "#FFC107",
                  color: "#0B0B0B",
                  boxShadow: sent
                    ? "0 4px 32px rgba(34,197,94,0.3)"
                    : "0 4px 32px rgba(255,193,7,0.25)",
                }}
              >
                {sent ? (
                  "Wysłano! Odezwiemy się wkrótce."
                ) : (
                  <>
                    WYŚLIJ ZAPYTANIE
                    <Send size={16} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
