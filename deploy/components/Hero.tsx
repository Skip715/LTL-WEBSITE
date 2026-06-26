import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-[#1a2b4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-block bg-[#2b6cb0] bg-opacity-30 border border-[#2b6cb0] border-opacity-50 rounded-full px-4 py-2 text-sm font-medium text-blue-200 mb-6">
            Flexible IT Hardware Leasing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Modern Technology.<br />
            <span className="text-[#2b6cb0]">Manageable Payments.</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
            Long Term Leasing empowers businesses of all sizes to acquire essential IT infrastructure 
            through flexible, predictable financing. Protect your working capital and keep your team 
            equipped with the latest technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#2b6cb0] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3b82c4] transition-colors text-center"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1a2b4a] transition-colors text-center"
            >
              Apply Now
            </Link>
            <Link
              href="/how-it-works"
              className="text-blue-200 px-8 py-4 rounded-lg font-semibold text-lg hover:text-white transition-colors text-center underline underline-offset-4"
            >
              How It Works →
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-t border-white border-opacity-10 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 'Fixed', label: 'Monthly Payments' },
              { value: 'OpEx', label: 'Friendly Financing' },
              { value: '100%', label: 'Tailored Packages' },
              { value: 'Dell', label: 'Certified Hardware' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-[#2b6cb0]">{stat.value}</div>
                <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
