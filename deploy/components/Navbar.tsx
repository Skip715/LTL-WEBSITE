'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <nav className="bg-white text-[#1a2b4a] sticky top-0 z-50 shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="border-r border-[#1a2b4a] border-opacity-20 pr-3 mr-1">
              <div className="font-black text-2xl tracking-tight leading-none">
                <span className="text-[#2b6cb0]">L</span><span className="text-[#1a2b4a]">T</span><span className="text-[#2b6cb0]">L</span>
              </div>
            </div>
            <div>
              <div className="text-[#1a2b4a] font-bold text-sm leading-tight">LONG TERM LEASING S.R.L</div>
              <div className="text-[#2b6cb0] text-xs leading-tight">FLEXIBLE IT HARDWARE LEASING</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-[#2b6cb0] transition-colors font-medium">{t.nav.home}</Link>
            <Link href="/about" className="hover:text-[#2b6cb0] transition-colors font-medium">{t.nav.about}</Link>
            <Link href="/how-it-works" className="hover:text-[#2b6cb0] transition-colors font-medium">{t.nav.howItWorks}</Link>
            <Link href="/contact" className="hover:text-[#2b6cb0] transition-colors font-medium">{t.nav.contact}</Link>

            {/* Language Toggle */}
            <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${language === 'es' ? 'bg-[#1a2b4a] text-white' : 'text-gray-500 hover:text-[#1a2b4a]'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${language === 'en' ? 'bg-[#1a2b4a] text-white' : 'text-gray-500 hover:text-[#1a2b4a]'}`}
              >
                EN
              </button>
            </div>

            <Link href="/contact" className="bg-[#2b6cb0] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#1a2b4a] transition-colors">
              {t.nav.getQuote}
            </Link>
          </div>

          <button className="md:hidden text-[#1a2b4a]" onClick={() => setIsOpen(!isOpen)}>
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
              <Link href="/" className="hover:text-[#2b6cb0] transition-colors font-medium" onClick={() => setIsOpen(false)}>{t.nav.home}</Link>
              <Link href="/about" className="hover:text-[#2b6cb0] transition-colors font-medium" onClick={() => setIsOpen(false)}>{t.nav.about}</Link>
              <Link href="/how-it-works" className="hover:text-[#2b6cb0] transition-colors font-medium" onClick={() => setIsOpen(false)}>{t.nav.howItWorks}</Link>
              <Link href="/contact" className="hover:text-[#2b6cb0] transition-colors font-medium" onClick={() => setIsOpen(false)}>{t.nav.contact}</Link>
              <div className="flex items-center gap-1 border border-gray-200 rounded-lg p-1 w-fit">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${language === 'es' ? 'bg-[#1a2b4a] text-white' : 'text-gray-500 hover:text-[#1a2b4a]'}`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${language === 'en' ? 'bg-[#1a2b4a] text-white' : 'text-gray-500 hover:text-[#1a2b4a]'}`}
                >
                  EN
                </button>
              </div>
              <Link href="/contact" className="bg-[#2b6cb0] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#1a2b4a] transition-colors text-center" onClick={() => setIsOpen(false)}>
                {t.nav.getQuote}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
