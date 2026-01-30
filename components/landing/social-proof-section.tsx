import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Pense que tenia que cambiar quien era para gustar. Este metodo me enseno que mi autenticidad es mi mayor fortaleza.",
    author: "Carlos M.",
    role: "32 anos",
  },
  {
    quote: "Las conversaciones que antes me generaban ansiedad ahora fluyen. La diferencia es increible.",
    author: "Andrea L.",
    role: "28 anos",
  },
  {
    quote: "Por fin entendi por que los trucos no funcionaban. La conexion real viene de adentro.",
    author: "Miguel R.",
    role: "35 anos",
  },
]

export function SocialProofSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Historias Reales
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mt-4 mb-6 text-balance">
            Personas que ya lo lograron
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformaciones reales de quienes decidieron dejar de fingir y empezar a conectar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 md:p-8 bg-card rounded-lg border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-muted mb-4" />
              <p className="text-foreground leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
