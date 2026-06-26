import Link from 'next/link'

export default function Equipment() {
  const equipment = [
    {
      name: 'Dell Monitors',
      description: 'Professional displays from 27" to 40". Perfect for productive workspaces.',
      items: ['Dell P2725QE', 'Dell P3225QE', 'Dell U2725QE', 'Dell U3225QE', 'Dell U4025QW'],
     image: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?w=600&q=80',
    },
    {
      name: 'Dell Docking Stations',
      description: 'Universal docking solutions to connect all your peripherals with ease.',
      items: ['Dell WD25 Dock', 'Dell SD25 Dock', 'Dell Thunderbolt 4 Smart Dock'],
      image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
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
            <div key={category.name} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
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
            </div>
          ))}
        </div>

        <div className="bg-[#1a2b4a] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Don't See What You Need?</h3>
              <p className="text-blue-200 text-lg mb-8">
                We can finance a wide range of IT hardware beyond what is listed here.
                Get in touch and tell us what your business requires.
              </p>
              <Link
                href="/contact"
                className="bg-[#2b6cb0] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3b82c4] transition-colors inline-block w-fit"
              >
                Enquire Now
              </Link>
            </div>
            <div className="hidden lg:block h-64 lg:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80"
                alt="IT equipment"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
