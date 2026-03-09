import { HeroSection } from "@/components/hero-section"
import { ResultsSection } from "@/components/results-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero - Primeira dobra com CTA principal */}
      <HeroSection />

      {/* Resultados - Prova social com antes/depois */}
      <ResultsSection />

      {/* Sobre - Apresentação do personal */}
      <AboutSection />

      {/* Serviços - O que o aluno recebe */}
      <ServicesSection />

      {/* Benefícios - Por que ter um personal */}
      <BenefitsSection />

      {/* Depoimentos - Social proof */}
      <TestimonialsSection />

      {/* CTA Final - Chamada para ação */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton />
    </main>
  )
}
