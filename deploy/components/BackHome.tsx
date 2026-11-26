'use client'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'

export default function BackHome() {
  const { t } = useLanguage()
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white border border-white/20 hover:border-white/60 rounded-full px-4 py-2 mb-8 transition-colors"
    >
      <span aria-hidden="true">←</span>
      {t.nav.backHome}
    </Link>
  )
}
