import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1a2b4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="40" height="33" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="8" width="14" height="60" fill="white"/>
                <rect x="0" y="54" width="32" height="14" fill="white"/>
                <rect x="40" y="8" width="40" height="14" fill="white"/>
                <rect x="53" y="8" width="14" height="60" fill="white"/>
                <polygon points="53,22 67,8 53,8" fill="#2b6cb0"/>
                <rect x="90" y="8" width="14" height="60" fill="white"/>
                <rect x="90" y="54" width="30" height="14" fill="white"/>
              </svg>
              <div>
                <div className="font-bold text-sm leading-tight">LONG TERM LEASING S.R.L</div>
                <div className="text-[#2b6cb0] text-xs">FLEXIBLE IT HARDWARE LEASING</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses of all sizes to acquire essential IT infrastructure through flexible, predictable financing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="mailto:info@ltl.srl" className="hover:text-white transition-colors">
                  info@ltl.srl
                </a>
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
            © {new Date().getFullYear()} Long Term Leasing S.R.L. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Flexible IT Hardware Leasing
          </p>
        </div>
      </div>
    </footer>
  )
}
