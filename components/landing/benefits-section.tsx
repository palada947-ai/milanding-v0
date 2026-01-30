import { Check } from "lucide-react"

const benefits = [
  {
    title: "Seguridad que se siente, no que se finge",
    description: "Desarrolla una confianza real que los demas perciben sin que tengas que esforzarte.",
  },
  {
    title: "Conversaciones que fluyen naturalmente",
    description: "Nunca mas te quedaras sin saber que decir o sintiendote incomodo en silencios.",
  },
  {
    title: "Atraccion que nace de tu esencia",
    description: "Deja de actuar y empieza a atraer desde quien realmente eres.",
  },
  {
    title: "Conexiones emocionales profundas",
    description: "Aprende a generar ese interes genuino que va mas alla de lo superficial.",
  },
  {
    title: "Presencia magnetica sin esfuerzo",
    description: "Tu energia natural sera tu mayor herramienta de atraccion.",
  },
  {
    title: "Libertad de ser tu mismo",
    description: "Sin guiones, sin frases memorizadas, sin mascaras — solo tu version mas autentica.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Transformacion Real
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mt-4 mb-6 text-balance">
            Lo que vas a lograr
            <br />
            <span className="italic">en 7 dias</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No son promesas vacias. Son resultados que obtendras aplicando el sistema paso a paso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex gap-4 p-6 bg-background rounded-lg border border-border"
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-accent text-accent-foreground rounded-full">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
