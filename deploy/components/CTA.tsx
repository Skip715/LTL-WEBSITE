import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1a2b4a] to-[#2b6cb0] rounded-2xl p-12 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect Your Working Capital?
          </h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join businesses across the UK who are managing their IT costs smarter 
            with Long Term Leasing. Get a tailored quote today — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#1a2b4a] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1a2b4a] transition-colors"
            >
              Apply Now
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-8">
            Flexible packages for businesses of all sizes · Dell certified hardware · Fixed monthly payments
          </p>
        </div>
      </div>
    </section>
  )
}
