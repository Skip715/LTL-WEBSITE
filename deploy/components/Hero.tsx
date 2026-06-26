'use client'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#1a2b4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-24 md:py-32 items-center">
          <div>
            <div className="inline-block bg-[#2b6cb0] bg-opacity-30 border border-[#2b6cb0] border-opacity-50 rounded-full px-4 py-2 text-sm font-medium text-blue-200 mb-6">
              {t.hero.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {t.hero.headline1}<br />
              <span className="text-[#2b6cb0]">{t.hero.headline2}</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
              {t.hero.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-[#2b6cb0] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3b82c4] transition-colors text-center">
                {t.hero.getQuote}
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1a2b4a] transition-colors text-center">
                {t.hero.applyNow}
              </Link>
              <Link href="/how-it-works" className="text-blue-200 px-8 py-4 rounded-lg font-semibold text-lg hover:text-white transition-colors text-center underline underline-offset-4">
                {t.hero.howItWorks}
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80"
                alt="Business team working with modern technology"
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a2b4a] to-transparent p-6">
                <p className="text-white font-semibold text-lg">{t.hero.imageCaption}</p>
                <p className="text-blue-200 text-sm">{t.hero.imageSub}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-10 rounded-xl p-5 border border-white border-opacity-10">
                <div className="text-3xl font-bold text-[#2b6cb0]">{t.hero.stat1value}</div>
                <div className="text-blue-200 text-sm mt-1">{t.hero.stat1label}</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-5 border border-white border-opacity-10">
                <div className="text-3xl font-bold text-[#2b6cb0]">{t.hero.stat2value}</div>
                <div className="text-blue-200 text-sm mt-1">{t.hero.stat2label}</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-5 border border-white border-opacity-10">
                <div className="text-3xl font-bold text-[#2b6cb0]">{t.hero.stat3value}</div>
                <div className="text-blue-200 text-sm mt-1">{t.hero.stat3label}</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-5 border border-white border-opacity-10">
                <div className="text-3xl font-bold text-[#2b6cb0]">{t.hero.stat4value}</div>
                <div className="text-blue-200 text-sm mt-1">{t.hero.stat4label}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
