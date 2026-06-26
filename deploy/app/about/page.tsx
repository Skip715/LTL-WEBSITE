'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <section className="bg-[#1a2b4a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.about.heroHeading}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">{t.about.heroSub}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-[#1a2b4a] mb-6">{t.about.missionHeading}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{t.about.missionBody}</p>
            </div>
            <div className="hidden lg:block rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
                alt="Modern office"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2b4a] mb-4 text-center">{t.about.whyHeading}</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">{t.about.whySub}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.about.benefits.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1a2b4a] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1a2b4a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.about.commitHeading}</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">{t.about.commitBody}</p>
        </div>
      </section>
    </div>
  )
}
