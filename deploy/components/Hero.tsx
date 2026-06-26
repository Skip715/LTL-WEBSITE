import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-[#1a2b4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-24 md:py-32 items-center">
          <div>
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
              <Link href="/contact" className="bg-[#2b6cb0] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3b82c4] transition-colors text-center">
                Get a Quote
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1a2b4a] transition-colors text-center">
                Apply Now
              </Link>
              <Link href="/how-it-works" className="text-blue-200 px-8 py-4 rounded-lg font-semibold text-lg hover:text-white transition-colors text-center underline underline-offset-4">
                How It Works →
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80"
                alt="Business team working with modern technology"
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a2b4a] to-transparent p-6">
                <p className="text-white font-semibold text-lg">Empowering teams with modern IT</p>
                <p className="text-blue-200 text-sm">Flexible leasing for businesses of all sizes</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-10 rounded-xl p-5 border border-white border-opacity-10">
                <div className="text-3xl font-bold text-[#2b6cb0]">100%</div>
                <div className="text-blue-200 text-sm mt-1">Tailored packages</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-5 border border-white border-opacity-10">
                <div className="text-3xl font-bold text-[#2b6cb0]">Fixed</div>
                <div className="text-blue-200 text-sm mt-1">Monthly payments</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-5 border border-white border-opacity-10">
                <div className="text-3xl font-bold text-[#2b6cb0]">OpEx</div>
                <div className="text-blue-200 text-sm mt-1">Friendly financing</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-5 border border-white border-opacity-10">
                <div className="text-3xl font-bold text-[#2b6cb0]">Dell</div>
                <div className="text-blue-200 text-sm mt-1">Certified hardware</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
