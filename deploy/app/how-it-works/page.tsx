export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#1a2b4a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Getting started with IT leasing is simpler than you think.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 mb-12">
            <div className="w-16 h-16 rounded-full bg-[#1a2b4a] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">01</div>
            <div><h3 className="text-2xl font-bold text-[#1a2b4a] mb-3">Tell Us What You Need</h3><p className="text-gray-600 text-lg">Get in touch and tell us about your business and the IT equipment you require.</p></div>
          </div>
          <div className="flex gap-8 mb-12">
            <div className="w-16 h-16 rounded-full bg-[#1a2b4a] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">02</div>
            <div><h3 className="text-2xl font-bold text-[#1a2b4a] mb-3">We Build Your Package</h3><p className="text-gray-600 text-lg">Our team designs a leasing package tailored to your budget and business cycle.</p></div>
          </div>
          <div className="flex gap-8 mb-12">
            <div className="w-16 h-16 rounded-full bg-[#1a2b4a] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">03</div>
            <div><h3 className="text-2xl font-bold text-[#1a2b4a] mb-3">Simple Application</h3><p className="text-gray-600 text-lg">Complete our straightforward application process.</p></div>
          </div>
          <div className="flex gap-8 mb-12">
            <div className="w-16 h-16 rounded-full bg-[#1a2b4a] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">04</div>
            <div><h3 className="text-2xl font-bold text-[#1a2b4a] mb-3">Equipment Delivered</h3><p className="text-gray-600 text-lg">Once approved, your equipment is delivered and ready to use.</p></div>
          </div>
          <div className="flex gap-8 mb-12">
            <div className="w-16 h-16 rounded-full bg-[#1a2b4a] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">05</div>
            <div><h3 className="text-2xl font-bold text-[#1a2b4a] mb-3">Ongoing Support</h3><p className="text-gray-600 text-lg">Throughout your lease term we are here to help.</p></div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1a2b4a] mb-4">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#1a2b4a] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2b6cb0] transition-colors">Get a Quote</a>
            <a href="/contact" className="border-2 border-[#1a2b4a] text-[#1a2b4a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1a2b4a] hover:text-white transition-colors">Apply Now</a>
          </div>
        </div>
      </section>
    </div>
  )
}
