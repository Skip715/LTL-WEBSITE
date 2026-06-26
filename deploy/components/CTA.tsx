'use client'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1a2b4a] to-[#2b6cb0] rounded-2xl p-12 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.cta.heading}
          </h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#1a2b4a] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              {t.cta.getQuote}
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1a2b4a] transition-colors"
            >
              {t.cta.applyNow}
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-8">{t.cta.footer}</p>
        </div>
      </div>
    </section>
  )
}
