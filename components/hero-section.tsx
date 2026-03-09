"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"
import { asset } from "@/lib/utils"

const WHATSAPP_NUMBER = "5512982642197"
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre o acompanhamento personalizado."

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={asset("/images/hero-fitness.jpg")}
          alt="Treino intenso"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Vagas limitadas para acompanhamento</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6 text-balance">
            <span className="text-foreground">TRANSFORME</span>
            <br />
            <span className="text-primary">SEU CORPO</span>
            <br />
            <span className="text-foreground">COM ACOMPANHAMENTO</span>
            <br />
            <span className="text-muted-foreground">PROFISSIONAL</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Treinos personalizados, dieta adaptada e acompanhamento para resultados reais. 
            Sua transformação começa com uma decisão.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 group"
              asChild
            >
              <a href="#servicos">
                Começar minha transformação
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6 group"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border/50">
            <div>
              <p className="font-display text-4xl md:text-5xl text-primary">+500</p>
              <p className="text-sm text-muted-foreground mt-1">Alunos transformados</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-primary">8+</p>
              <p className="text-sm text-muted-foreground mt-1">Anos de experiência</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-primary">98%</p>
              <p className="text-sm text-muted-foreground mt-1">Taxa de satisfação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
