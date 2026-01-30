"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-6 text-balance">
          Tu momento de transformacion
          <br />
          <span className="italic">es ahora</span>
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          En 7 dias puedes seguir sintiendote invisible e inseguro... o puedes 
          empezar a conectar autenticamente con quien te atrae.
        </p>

        <Button 
          size="lg" 
          onClick={scrollToOffer}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base font-medium rounded-full"
        >
          Si, Quiero Empezar Hoy
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <p className="text-sm text-muted-foreground mt-6">
          Acceso inmediato • Garantia de 7 dias • Solo $9
        </p>
      </div>
    </section>
  )
}
