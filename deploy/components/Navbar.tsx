'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <nav className="bg-white text-[#1F2531] sticky top-0 z-50 shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center" aria-label="Competitive Components — home">
            <img
              src="/competitive-components-wordmark.png"
              alt="Competitive Components"
              className="h-9 md:h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-[#036FE7] transition-colors font-medium">{t.nav.home}</Link>
            <Link href="/about" className="hover:text-[#036FE7] transition-colors font-medium">{t.nav.about}</Link>
            <Link href="/how-it-works" className="hover:text-[#036FE7] transition-colors font-medium">{t.nav.howItWorks}</Link>
            <Link href="/contact" className="hover:text-[#036FE7] transition-colors font-medium">{t.nav.contact}</Link>

            {/* Language Toggle */}
            <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${language === 'es' ? 'bg-[#1F2531] text-white' : 'text-gray-500 hover:text-[#1F2531]'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${language === 'en' ? 'bg-[#1F2531] text-white' : 'text-gray-500 hover:text-[#1F2531]'}`}
              >
                EN
              </button>
            </div>

            <Link href="/contact" className="bg-[#036FE7] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#1F2531] transition-colors">
              {t.nav.getQuote}
            </Link>
          </div>

          <button className="md:hidden text-[#1F2531]" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link href="/" className="hover:text-[#036FE7] transition-colors font-medium" onClick={() => setIsOpen(false)}>{t.nav.home}</Link>
              <Link href="/about" className="hover:text-[#036FE7] transition-colors font-medium" onClick={() => setIsOpen(false)}>{t.nav.about}</Link>
              <Link href="/how-it-works" className="hover:text-[#036FE7] transition-colors font-medium" onClick={() => setIsOpen(false)}>{t.nav.howItWorks}</Link>
              <Link href="/contact" className="hover:text-[#036FE7] transition-colors font-medium" onClick={() => setIsOpen(false)}>{t.nav.contact}</Link>
              <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1 w-fit">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${language === 'es' ? 'bg-[#1F2531] text-white' : 'text-gray-500 hover:text-[#1F2531]'}`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${language === 'en' ? 'bg-[#1F2531] text-white' : 'text-gray-500 hover:text-[#1F2531]'}`}
                >
                  EN
                </button>
              </div>
              <Link href="/contact" className="bg-[#036FE7] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#1F2531] transition-colors text-center" onClick={() => setIsOpen(false)}>
                {t.nav.getQuote}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
