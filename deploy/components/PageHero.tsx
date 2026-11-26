import BackHome from '@/components/BackHome'
import BrandBar from '@/components/BrandBar'

// Banner used at the top of the inner pages (About, How It Works, Contact).
export default function PageHero({ heading, sub }: { heading: string; sub: string }) {
  return (
    <section className="relative overflow-hidden bg-[#1F2531] text-white py-16 md:py-20">
      <img
        src="/competitive-components-icon.png"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[420px] opacity-25 pointer-events-none select-none"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackHome />
        <BrandBar className="mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{heading}</h1>
        <p className="text-xl text-blue-200 max-w-2xl">{sub}</p>
      </div>
    </section>
  )
}
