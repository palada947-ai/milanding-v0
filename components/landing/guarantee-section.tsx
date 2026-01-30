import { Shield, AlertCircle } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Shield className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
            Tu inversion esta protegida
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Si aplicas el metodo durante 7 dias y no ves resultados, te devolvemos el 100% de tu dinero. 
            Sin preguntas, sin complicaciones.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-background rounded-lg border border-border">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-foreground mb-2">
                Este producto NO es para todos
              </h3>
              <p className="text-muted-foreground mb-4">
                Atraccion Prohibida no es para quienes buscan atajos magicos, tacticas manipulativas 
                o resultados sin hacer nada.
              </p>
              <p className="text-muted-foreground">
                Es para personas comprometidas con mejorar su magnetismo personal, atraer con 
                autenticidad y conectar emocionalmente sin fingir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
