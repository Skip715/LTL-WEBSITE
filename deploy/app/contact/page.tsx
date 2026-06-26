'use client'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#1a2b4a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Ready to explore leasing for your business? Get in touch and we will put together a package tailored to you.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-[#1a2b4a] mb-8">Send Us a Message</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Your Company Ltd" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3" placeholder="Tell us about your requirements..." />
                </div>
                <div className="flex gap-4">
                  <a href="mailto:info@ltl.srl" className="bg-[#1a2b4a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2b6cb0] transition-colors">Get a Quote</a>
                  <a href="mailto:info@ltl.srl" className="border-2 border-[#1a2b4a] text-[#1a2b4a] px-8 py-4 rounded-lg font-semibold hover:bg-[#1a2b4a] hover:text-white transition-colors">Apply Now</a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a2b4a] mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[#1a2b4a] mb-1">Email</h3>
                  <a href="mailto:info@ltl.srl" className="text-[#2b6cb0] hover:underline">info@ltl.srl</a>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a2b4a] mb-1">Registered Address</h3>
                  <p className="text-gray-600">Flat 1 Chestnut Court, 127 Richmond Road, Kingston Upon Thames, Surrey, England, KT2 5BX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
