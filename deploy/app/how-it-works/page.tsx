export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Tell Us What You Need",
      description: "Get in touch and tell us about your business and the IT equipment you require. Whether it is a handful of laptops or a full server room upgrade, we will listen and advise.",
    },
    {
      number: "02",
      title: "We Build Your Package",
      description: "Our team designs a leasing package tailored to your budget and business cycle. We source quality Dell hardware and structure fixed, predictable payments that work for you.",
    },
    {
      number: "03",
      title: "Simple Application",
      description: "Complete our straightforward application process. We work with businesses of all sizes and financial backgrounds to find a solution that fits.",
    },
    {
      number: "04",
      title: "Equipment Delivered",
      description: "Once approved, your equipment is delivered and ready to use. Your team gets access to modern, reliable technology without the large upfront cost.",
    },
    {
      number: "05",
      title: "Ongoing Support",
      description: "Throughout your lease term we are here to help. At the end of your agreement, simply upgrade to the latest technology and start a new term.",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-[#1a2b4a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Getting started with IT leasing is simpler than you think. Here is our straightforward process from enquiry to delivery.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#1a2b4a] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-[#2b6cb0] mt-4 opacity-30" />
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="text-2xl font-bold text-[#1a2b4a] mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1a2b4a] mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact us today for a no-obligation quote tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              href="/contact"
              className="bg-[#1a2b4a] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2b6cb0] transition-colors"
            >
              Get a Quote
            </a>
            
              href="/contact"
              className="border-2 border-[#1a2b4a] text-[#1a2b4a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1a2b4a] hover:text-white transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
