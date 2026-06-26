'use client'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4a] mb-4">
            {t.howItWorks.heading}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.howItWorks.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {t.howItWorks.steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < t.howItWorks.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#2b6cb0] bg-opacity-20 z-0" />
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#1a2b4a] text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-[#1a2b4a] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/how-it-works"
            className="text-[#2b6cb0] font-semibold hover:text-[#1a2b4a] transition-colors underline underline-offset-4"
          >
            {t.howItWorks.learnMore}
          </Link>
        </div>
      </div>
    </section>
  )
}
