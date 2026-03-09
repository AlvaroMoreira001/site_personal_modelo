"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

const WHATSAPP_NUMBER = "5511999999999"
const WHATSAPP_MESSAGE = "Olá! Quero começar minha transformação com acompanhamento personalizado."

export function CTASection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section id="contato" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Vagas limitadas - Garanta a sua</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 text-balance">
            SEU RESULTADO COMEÇA COM{" "}
            <span className="text-primary">UMA DECISÃO</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Comece hoje seu acompanhamento personalizado. 
            Entre em contato e dê o primeiro passo para sua transformação.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xl px-12 py-8 group"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 h-6 w-6" />
              Quero falar com o Personal
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Resposta em até 2 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Primeira consulta gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Sem compromisso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
