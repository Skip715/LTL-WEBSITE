'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, translations } from './translations'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations['en']
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  t: translations['es'],
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')

  useEffect(() => {
    const saved = localStorage.getItem('ltl-language') as Language
    if (saved === 'en' || saved === 'es') {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('ltl-language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
