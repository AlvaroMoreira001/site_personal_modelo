import Image from "next/image"
import { Award, Users, Target, Dumbbell } from "lucide-react"

const credentials = [
  {
    icon: Award,
    label: "CREF Ativo"
  },
  {
    icon: Users,
    label: "+500 Alunos"
  },
  {
    icon: Target,
    label: "Especialista em Hipertrofia"
  },
  {
    icon: Dumbbell,
    label: "8+ Anos de Experiência"
  }
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/personal-trainer.jpg"
                alt="Personal Trainer"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-2xl">
              <p className="font-display text-5xl text-primary">8+</p>
              <p className="text-muted-foreground text-sm mt-1">Anos transformando vidas</p>
            </div>

            {/* Accent element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Sobre o Personal</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 text-balance">
              AJUDANDO PESSOAS COMUNS A CONQUISTAREM RESULTADOS{" "}
              <span className="text-primary">EXTRAORDINÁRIOS</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                Com mais de 8 anos de experiência no mercado fitness, minha missão é 
                transformar vidas através de treinos estratégicos e acompanhamento individual.
              </p>
              <p>
                Especialista em hipertrofia e emagrecimento, desenvolvo programas 
                personalizados que respeitam sua rotina e potencializam seus resultados.
              </p>
              <p>
                Cada aluno é único, e por isso cada plano é desenvolvido especificamente 
                para suas necessidades, objetivos e limitações.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((credential) => (
                <div 
                  key={credential.label}
                  className="flex items-center gap-3 bg-secondary/50 rounded-lg p-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <credential.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{credential.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
