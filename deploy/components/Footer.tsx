'use client'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#1a2b4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="border-r border-white border-opacity-30 pr-3 mr-1">
                <div className="font-black text-2xl tracking-tight leading-none">
                  <span className="text-[#2b6cb0]">L</span><span className="text-white">T</span><span className="text-[#2b6cb0]">L</span>
                </div>
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">LONG TERM LEASING S.R.L</div>
                <div className="text-[#2b6cb0] text-xs">{t.footer.flexible}</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">{t.nav.home}</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">{t.nav.about}</Link></li>
              <li><Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">{t.nav.howItWorks}</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.contact}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="mailto:info@ltl.srl" className="hover:text-white transition-colors">info@ltl.srl</a>
              </li>
              <li className="leading-relaxed">
                Flat 1 Chestnut Court<br />
                127 Richmond Road<br />
                Kingston Upon Thames<br />
                Surrey, England, KT2 5BX
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Long Term Leasing S.R.L. {t.footer.rights}
          </p>
          <p className="text-gray-400 text-sm">{t.footer.flexible}</p>
        </div>
      </div>
    </footer>
  )
}
