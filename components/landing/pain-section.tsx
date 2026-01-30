import Image from "next/image"
import { X } from "lucide-react"

const painPoints = [
  "Te sientes invisible cuando intentas conectar con alguien que te atrae",
  "Memorizas frases y tecnicas que suenan falsas cuando las dices",
  "La inseguridad te paraliza y no sabes como actuar naturalmente",
  "Sientes que finges ser alguien que no eres para gustar",
  "Las conversaciones se sienten forzadas y no fluyen",
]

export function PainSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            El Problema Real
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mt-4 mb-6 text-balance">
            Por que todo lo que has intentado
            <br />
            <span className="italic">no ha funcionado</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La mayoria de metodos te ensenan a fingir. Te dan guiones, tecnicas y frases 
            memorizadas que te hacen sentir mas desconectado de ti mismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid gap-4">
              {painPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 md:p-5 bg-background rounded-lg border border-border"
                >
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-muted rounded-full">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-foreground text-base leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/frustration.jpg"
              alt="La frustracion de las tecnicas falsas"
              width={500}
              height={600}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="mt-12 p-6 md:p-8 bg-muted rounded-lg border border-border text-center">
          <p className="text-lg md:text-xl text-foreground font-medium">
            El problema no eres tu. El problema es el metodo.
          </p>
          <p className="text-muted-foreground mt-2">
            No necesitas mas tacticas superficiales — necesitas activar tu magnetismo natural.
          </p>
        </div>
      </div>
    </section>
  )
}
