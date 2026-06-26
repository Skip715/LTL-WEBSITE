export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1a2b4a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-200 max-w-2xl">
            Empowering businesses with flexible IT hardware leasing since day one.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a2b4a] mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Long Term Leasing, we believe that out-of-date hardware should never hold a business back, 
              and that acquiring technology shouldn't drain your bank account. Our mission is to provide IT 
              leasing solutions tailored to organisations of all sizes, empowering you to manage your cash 
              flow, preserve valuable capital, and stay ahead of the technology curve.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a2b4a] mb-12 text-center">Why Choose Long Term Leasing?</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We know that in today's digital landscape, cash is king. That's why we help businesses distribute 
            their IT spend on a wider, flatter scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Superior Cash Flow Management',
                description: 'Avoid massive capital outlays. Instead of buying IT equipment outright, spread the cost over manageable, fixed periodic payments. This leaves vital working capital free to invest in growth, marketing, or daily operations.',
                icon: '💰',
              },
              {
                title: 'Access to the Latest Technology',
                description: 'Technology evolves rapidly. Leasing allows you to easily scale your IT fleet and upgrade to newer devices at the end of your term, minimising downtime and lost productivity.',
                icon: '🖥️',
              },
              {
                title: 'Tax Efficiency & Financial Flexibility',
                description: 'Lease payments are frequently treated as operating expenses (OpEx), which can often be offset against taxable profits. This keeps assets off your balance sheet and improves your financial ratios.',
                icon: '📊',
              },
              {
                title: 'Customised to Every Business',
                description: 'Whether you are a growing startup needing a few laptops or an enterprise upgrading an entire server room, we build flexible, scalable packages that fit your unique budget cycles.',
                icon: '🤝',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1a2b4a] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-[#1a2b4a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            We do more than just finance hardware; we build long-term partnerships. Our team takes the time 
            to understand your strategic goals and financial circumstances, ensuring you get the exact IT 
            solutions you need to thrive.
          </p>
        </div>
      </section>
    </div>
  )
}
