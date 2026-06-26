import Link from 'next/link'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Tell Us What You Need',
      description: 'Get in touch and describe your IT requirements. We\'ll listen and advise on the best solution for your business.',
    },
    {
      number: '02',
      title: 'We Build Your Package',
      description: 'We design a tailored leasing package with fixed, predictable payments that work around your budget cycle.',
    },
    {
      number: '03',
      title: 'Simple Application',
      description: 'Complete our straightforward application. We work with businesses of all sizes and financial backgrounds.',
    },
    {
      number: '04',
      title: 'Equipment Delivered',
      description: 'Once approved, your Dell hardware is delivered and ready to use — no large upfront cost required.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4a] mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Getting started with IT leasing is simpler than you think. 
            Here's our process from enquiry to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#2b6cb0] bg-opacity-20 z-0" />
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#1a2b4a] text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-[#1a2b4a] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/how-it-works"
            className="text-[#2b6cb0] font-semibold hover:text-[#1a2b4a] transition-colors underline underline-offset-4"
          >
            Learn more about our process →
          </Link>
        </div>
      </div>
    </section>
  )
}
