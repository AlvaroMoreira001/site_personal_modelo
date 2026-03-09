import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas'
});

export const metadata: Metadata = {
  title: 'Personal Trainer | Transforme seu corpo com acompanhamento profissional',
  description: 'Treinos personalizados, dieta adaptada e acompanhamento para resultados reais. Comece sua transformação hoje!',
  keywords: ['personal trainer', 'treino personalizado', 'musculação', 'fitness', 'academia', 'emagrecimento', 'hipertrofia'],
  openGraph: {
    title: 'Personal Trainer | Transforme seu corpo',
    description: 'Treinos personalizados e acompanhamento profissional para resultados reais.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
