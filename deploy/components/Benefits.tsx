'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function Benefits() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4a] mb-4">
              {t.benefits.heading}
            </h2>
            <p className="text-gray-600 text-lg">
              {t.benefits.subheading}
            </p>
          </div>
          <div className="hidden lg:block rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
              alt="Business professionals in modern office"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.benefits.items.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#2b6cb0] transition-all"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-[#1a2b4a] mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
