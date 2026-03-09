import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Prefixo para assets no GitHub Pages (ex: /site_personal_modelo). Vazio em dev. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** Retorna o caminho completo de um asset (imagens, etc.) para funcionar no Pages. */
export function asset(path: string) {
  return path.startsWith('/') ? `${basePath}${path}` : `${basePath}/${path}`
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
