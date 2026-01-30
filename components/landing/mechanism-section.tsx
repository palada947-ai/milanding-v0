import Image from "next/image"
import { Zap, Heart, MessageCircle } from "lucide-react"

const steps = [
  {
    icon: Zap,
    step: "Paso 1",
    title: "Reprograma tu Mentalidad",
    description: "Descubre como funciona realmente la atraccion interna: psicologia emocional, presencia y lenguaje no verbal que comunica confianza.",
    image: "/images/step-mindset.jpg",
  },
  {
    icon: MessageCircle,
    step: "Paso 2",
    title: "Comunicacion Autentica",
    description: "Ejercicios practicos para expresarte con confianza y magnetismo, sin fingir ni usar frases comunes que todos repiten.",
    image: "/images/step-communication.jpg",
  },
  {
    icon: Heart,
    step: "Paso 3",
    title: "Conecta Emocionalmente",
    description: "Pasos claros para generar interes genuino, interpretar senales sociales y mantener conversaciones que fluyan naturalmente.",
    image: "/images/step-connection.jpg",
  },
]

export function MechanismSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            El Metodo
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mt-4 mb-6 text-balance">
            Por que este sistema
            <br />
            <span className="italic">realmente funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Principios psicologicos de atraccion emocional y comunicacion autentica que permiten 
            conectar de forma natural y magnetica — sin fingir, sin guiones, con presencia real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-6 md:p-8 bg-card rounded-lg border border-border group hover:border-accent/50 transition-colors"
            >
              <div className="absolute -top-3 left-6 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                {step.step}
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-lg mb-6 mt-2 group-hover:bg-accent/10 transition-colors">
                <step.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {step.description}
              </p>
              <Image
                src={step.image || "/placeholder.svg"}
                alt={step.title}
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 md:p-8 text-primary-foreground rounded-lg text-center border-primary bg-primary">
          <p className="text-lg md:text-xl font-medium">
            A diferencia de otros metodos, aqui aprendes a alinear tu presencia, 
            auto-confianza y comunicacion para que la conexion ocurra de forma natural.
          </p>
        </div>
      </div>
    </section>
  )
}
