'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function HowItWorksPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <section className="bg-[#1a2b4a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.howItWorksPage.heroHeading}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">{t.howItWorksPage.heroSub}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {t.howItWorksPage.steps.map((step, index) => (
              <div key={step.number} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#1a2b4a] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  {index < t.howItWorksPage.steps.length - 1 && (
                    <div className="w-0.5 h-full bg-[#2b6cb0] mt-4 opacity-30" />
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="text-2xl font-bold text-[#1a2b4a] mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1a2b4a] mb-4">{t.howItWorksPage.readyHeading}</h2>
          <p className="text-gray-600 text-lg mb-8">{t.howItWorksPage.readySub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#1a2b4a] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2b6cb0] transition-colors">
              {t.howItWorksPage.getQuote}
            </a>
            <a href="/contact" className="border-2 border-[#1a2b4a] text-[#1a2b4a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1a2b4a] hover:text-white transition-colors">
              {t.howItWorksPage.applyNow}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
