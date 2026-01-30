"use client"

import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/50 via-background to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium bg-card border border-border rounded-full">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-muted-foreground">Resultados en solo 7 dias</span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground mb-6 text-balance">
          Conecta Autenticamente
          <br />
          <span className="italic">y Se Irresistible</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Deja de fingir, de memorizar frases y de sentirte invisible. Aprende a activar tu atraccion natural 
          y conectar emocionalmente con quien te atrae — siendo tu mismo.
        </p>

        <div className="mt-8 mb-12 w-full max-w-xl mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMAGEN%207-jC49II2ko3kmGsWmJMO4NcKAtlqxPz.jpg"
            alt="Conexion autentica y magnetica"
            width={600}
            height={400}
            className="rounded-lg shadow-xl w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            onClick={scrollToOffer}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium rounded-full"
          >
            Quiero Transformarme Ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <span className="text-sm text-muted-foreground">
            Acceso inmediato
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>Sin tecnicas rigidas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>Sin guiones artificiales</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>100% Autentico</span>
          </div>
        </div>
      </div>
    </section>
  )
}
