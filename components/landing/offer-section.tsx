"use client"

import Image from "next/image"
import { Check, Gift, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const included = [
  "Guia completa 'Atraccion Prohibida: Conquista con Autenticidad en 7 Dias'",
  "Ejercicios practicos diarios para implementar cada capitulo",
  "Retos y ejemplos aplicables — no teoria vacia",
  "Acceso inmediato y de por vida",
]

const bonuses = [
  {
    title: "Checklist de Atraccion en 7 Pasos",
    description: "Un checklist diario con pasos simples para implementar cada capitulo del metodo.",
    image: "/images/bonus-checklist.jpg",
  },
  {
    title: "Plantillas de Comunicacion Autentica",
    description: "Frases y ejemplos practicos que reflejan autenticidad y generan curiosidad real.",
    image: "/images/bonus-templates.jpg",
  },
  {
    title: "Mini-Desafio de Confianza de 3 Dias",
    description: "Reto diario con ejercicios concretos para elevar tu autoestima y presencia.",
    image: "/images/bonus-challenge.jpg",
  },
]

export function OfferSection() {
  return (
    <section id="oferta" className="py-20 md:py-32 px-4 text-primary-foreground bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium uppercase tracking-widest opacity-80">
            Oferta Especial
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium mt-4 mb-6 text-balance">
            Todo lo que incluye
            <br />
            <span className="italic">tu transformacion</span>
          </h2>
        </div>

        <div className="bg-card text-card-foreground rounded-lg p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-8">
            <div className="order-2 md:order-1">
              <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
                Producto Principal
              </h3>
              <ul className="space-y-4">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-accent text-accent-foreground rounded-full mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/images/product-bundle.jpg"
                alt="Atraccion Prohibida - Paquete Completo"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="border-t border-border pt-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Gift className="w-5 h-5 text-accent" />
              <h3 className="font-serif text-2xl font-medium text-foreground">
                Bonos Incluidos
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {bonuses.map((bonus, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg flex flex-col">
                  <Image
                    src={bonus.image || "/placeholder.svg"}
                    alt={bonus.title}
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-36 object-cover mb-4"
                  />
                  <h4 className="font-medium text-foreground mb-1">{bonus.title}</h4>
                  <p className="text-sm text-muted-foreground">{bonus.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <div className="mb-6">
              <span className="text-muted-foreground line-through text-lg">$47</span>
              <div className="flex items-baseline justify-center gap-2 mt-1">
                <span className="font-serif text-5xl md:text-6xl font-medium text-foreground">$9</span>
                <span className="text-muted-foreground">USD</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Precio de lanzamiento por tiempo limitado</p>
            </div>

            <Button 
              size="lg"
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-6 text-base font-medium rounded-full"
            >
              Quiero Acceso Ahora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
