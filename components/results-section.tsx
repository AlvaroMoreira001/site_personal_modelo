"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { asset } from "@/lib/utils"

const transformations = [
  {
    id: 1,
    image: asset("/images/transformation-1.jpg"),
    name: "Lucas",
    result: "-12kg em 4 meses",
    description: "Hipertrofia e definição"
  },
  {
    id: 2,
    image: asset("/images/transformation-2.jpg"),
    name: "Rafael",
    result: "-18kg em 6 meses",
    description: "Emagrecimento e ganho de massa"
  },
  {
    id: 3,
    image: asset("/images/transformation-3.jpg"),
    name: "Camila",
    result: "-10kg em 3 meses",
    description: "Definição e fortalecimento"
  },
]

export function ResultsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transformations.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="resultados" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Prova Social</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 mb-6 text-balance">
            RESULTADOS <span className="text-primary">REAIS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transformações reais de alunos que decidiram mudar de vida. 
            Seu resultado pode ser o próximo.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Display */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {transformations.map((transformation) => (
                <div 
                  key={transformation.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="relative aspect-[16/10] md:aspect-[16/9]">
                    <Image
                      src={transformation.image}
                      alt={`Transformação de ${transformation.name}`}
                      fill
                      className="object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent rounded-2xl" />
                    
                    {/* Info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <div className="flex items-end justify-between">
                        <div>
                          <h3 className="font-display text-3xl md:text-4xl text-foreground mb-1">
                            {transformation.name}
                          </h3>
                          <p className="text-muted-foreground">{transformation.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-display text-4xl md:text-5xl text-primary">
                            {transformation.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ver transformação ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
          {transformations.map((transformation, index) => (
            <button
              key={transformation.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex 
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background" 
                  : "opacity-50 hover:opacity-75"
              }`}
            >
              <Image
                src={transformation.image}
                alt={transformation.name}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
