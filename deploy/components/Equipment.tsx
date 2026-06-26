import Link from 'next/link'

export default function Equipment() {
  const equipment = [
    {
      name: 'Dell Monitors',
      description: 'Professional displays from 27" to 40". Perfect for productive workspaces.',
      items: ['Dell P2725QE', 'Dell P3225QE', 'Dell U2725QE', 'Dell U3225QE', 'Dell U4025QW'],
    },
    {
      name: 'Dell Docking Stations',
      description: 'Universal docking solutions to connect all your peripherals with ease.',
      items: ['Dell WD25 Dock', 'Dell SD25 Dock', 'Dell Thunderbolt 4 Smart Dock'],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4a] mb-4">
            Equipment We Finance
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We specialise in financing quality Dell hardware — the same trusted equipment 
            used by businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {equipment.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold text-[#1a2b4a] mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-[#2b6cb0] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-[#1a2b4a] rounded-2xl p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Don't See What You Need?</h3>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            We can finance a wide range of IT hardware beyond what's listed here. 
            Get in touch and tell us what your business requires.
          </p>
          <Link
            href="/contact"
            className="bg-[#2b6cb0] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3b82c4] transition-colors inline-block"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  )
}
