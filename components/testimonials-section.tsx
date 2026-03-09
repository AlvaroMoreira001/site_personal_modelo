import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Lucas Mendes",
    result: "Perdeu 12kg",
    text: "Nunca imaginei que conseguiria resultados tão rápidos. O acompanhamento fez toda diferença na minha motivação e nos meus resultados.",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Paula",
    result: "Ganhou 8kg de massa",
    text: "Depois de anos tentando sozinha, finalmente encontrei um profissional que entende minhas necessidades. Recomendo de olhos fechados!",
    rating: 5
  },
  {
    id: 3,
    name: "Rafael Costa",
    result: "Definição total",
    text: "O treino é desafiador mas muito bem planejado. Cada semana vejo evolução e isso me mantém motivado. Melhor investimento que fiz.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Depoimentos</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 mb-6 text-balance">
            O QUE DIZEM <span className="text-primary">MEUS ALUNOS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A satisfação dos meus alunos é minha maior conquista. 
            Veja o que eles têm a dizer sobre o acompanhamento.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
