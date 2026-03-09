import { 
  Zap, 
  Target, 
  CheckCircle, 
  Flame, 
  Shield, 
  Brain 
} from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Evolução mais rápida",
    description: "Treinos otimizados para máximo resultado no menor tempo"
  },
  {
    icon: Target,
    title: "Treino ajustado para seu corpo",
    description: "Exercícios adaptados às suas capacidades e limitações"
  },
  {
    icon: CheckCircle,
    title: "Correção de execução",
    description: "Técnica perfeita para evitar lesões e maximizar ganhos"
  },
  {
    icon: Flame,
    title: "Maior motivação",
    description: "Acompanhamento que mantém você focado e determinado"
  },
  {
    icon: Shield,
    title: "Acompanhamento profissional",
    description: "Suporte de quem entende e está comprometido com você"
  },
  {
    icon: Brain,
    title: "Estratégia inteligente",
    description: "Periodização e progressão planejadas para resultados contínuos"
  }
]

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Benefícios</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 mb-6 text-balance">
            POR QUE TER UM <span className="text-primary">PERSONAL</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ter um profissional ao seu lado faz toda diferença entre resultados 
            medianos e transformações extraordinárias.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
