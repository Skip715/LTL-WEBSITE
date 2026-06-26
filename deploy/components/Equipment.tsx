'use client'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

const images = [
  'https://images.unsplash.com/photo-1547119957-637f8679db1e?w=600&q=80',
  'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
]

export default function Equipment() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4a] mb-4">
            {t.equipment.heading}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.equipment.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {t.equipment.categories.map((category, index) => (
            <div key={category.name} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={images[index]}
                  alt={category.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#1a2b4a] mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-[#2b6cb0] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#1a2b4a] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">{t.equipment.noSee}</h3>
              <p className="text-blue-200 text-lg mb-8">{t.equipment.noSeeBody}</p>
              <Link
                href="/contact"
                className="bg-[#2b6cb0] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3b82c4] transition-colors inline-block w-fit"
              >
                {t.equipment.enquireNow}
              </Link>
            </div>
            <div className="hidden lg:block h-64 lg:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80"
                alt="IT equipment"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
