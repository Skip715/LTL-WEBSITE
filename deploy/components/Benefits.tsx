export default function Benefits() {
  const benefits = [
    {
      icon: '💰',
      title: 'Protect Your Cash Flow',
      description:
        'Turn large upfront hardware costs into manageable monthly expenses. Keep your working capital free for growth, marketing, and daily operations.',
    },
    {
      icon: '🖥️',
      title: 'Always Latest Technology',
      description:
        'Never fall behind. Upgrade to the newest devices at the end of your lease term and keep your team productive with modern, reliable equipment.',
    },
    {
      icon: '📊',
      title: 'Tax Efficient',
      description:
        'Lease payments are typically treated as operating expenses, offsettable against taxable profits. Keep assets off your balance sheet.',
    },
    {
      icon: '📦',
      title: 'Flexible Packages',
      description:
        'From a handful of laptops to a full server room upgrade, we build packages around your budget and business cycle.',
    },
    {
      icon: '🤝',
      title: 'Long-Term Partnership',
      description:
        'We take the time to understand your strategic goals and financial circumstances, building a solution that helps your business thrive.',
    },
    {
      icon: '⚡',
      title: 'Fast & Simple Process',
      description:
        'Our straightforward application process gets you from enquiry to delivery quickly, with minimal paperwork and maximum clarity.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4a] mb-4">
              Why Lease with Long Term Leasing?
            </h2>
            <p className="text-gray-600 text-lg">
              We help businesses distribute their IT spend on a wider, flatter scale —
              so you can focus on growth, not hardware costs.
            </p>
          </div>
          <div className="hidden lg:block rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Business team working with technology"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#2b6cb0] transition-all"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-[#1a2b4a] mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
