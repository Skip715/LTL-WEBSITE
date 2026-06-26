'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <section className="bg-[#1a2b4a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.heroHeading}</h1>
          <p className="text-xl text-blue-200 max-w-2xl">{t.contact.heroSub}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-[#1a2b4a] mb-8">{t.contact.formHeading}</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.fullName}</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2b6cb0]" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.email}</label>
                  <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2b6cb0]" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.company}</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2b6cb0]" placeholder="Your Company Ltd" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.message}</label>
                  <textarea rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2b6cb0]" placeholder={t.contact.messagePlaceholder} />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:info@ltl.srl" className="bg-[#1a2b4a] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2b6cb0] transition-colors text-center">{t.contact.getQuote}</a>
                  <a href="mailto:info@ltl.srl" className="border-2 border-[#1a2b4a] text-[#1a2b4a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1a2b4a] hover:text-white transition-colors text-center">{t.contact.applyNow}</a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1a2b4a] mb-8">{t.contact.infoHeading}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a2b4a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">✉</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a2b4a] mb-1">{t.contact.emailLabel}</h3>
                    <a href="mailto:info@ltl.srl" className="text-[#2b6cb0] hover:underline">info@ltl.srl</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a2b4a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a2b4a] mb-1">{t.contact.addressLabel}</h3>
                    <p className="text-gray-600">Flat 1 Chestnut Court<br />127 Richmond Road<br />Kingston Upon Thames<br />Surrey, England<br />KT2 5BX</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#1a2b4a] mb-4">{t.contact.nextHeading}</h3>
                <ul className="space-y-3 text-gray-600">
                  {t.contact.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#2b6cb0] font-bold mt-0.5">{index + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
