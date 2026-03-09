import { User, FileSpreadsheet, Salad, MessageSquare, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: User,
    title: "Acompanhamento Personalizado",
    description: "Treino adaptado ao seu objetivo, rotina e nível de experiência. Cada exercício planejado para maximizar seus resultados.",
    highlight: "Plano único"
  },
  {
    icon: FileSpreadsheet,
    title: "Planilhas de Treino",
    description: "Do básico ao avançado, treinos estruturados com progressão inteligente para evolução constante e sem estagnação.",
    highlight: "Evolução garantida"
  },
  {
    icon: Salad,
    title: "Dietas Personalizadas",
    description: "Plano alimentar alinhado ao seu objetivo, seja emagrecimento, hipertrofia ou manutenção. Sem dietas malucas.",
    highlight: "Alimentação flexível"
  },
  {
    icon: MessageSquare,
    title: "Suporte Contínuo",
    description: "Contato direto para dúvidas, ajustes e acompanhamento. Você nunca estará sozinho na sua jornada.",
    highlight: "WhatsApp direto"
  }
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Serviços</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 mb-6 text-balance">
            O QUE VOCÊ <span className="text-primary">RECEBE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um sistema completo de acompanhamento desenvolvido para garantir 
            sua transformação de forma segura e eficiente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-2xl text-foreground">
                        {service.title}
                      </h3>
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {service.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Number indicator */}
                <div className="absolute top-4 right-4 font-display text-6xl text-muted/20">
                  0{index + 1}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a 
            href="#contato" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group"
          >
            Ver como funciona o acompanhamento
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
