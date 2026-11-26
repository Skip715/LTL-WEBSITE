// The red-over-blue double line taken from the "E" in the Competitive Components logo.
type Props = {
  align?: 'left' | 'center'
  tone?: 'brand' | 'light'
  className?: string
}

export default function BrandBar({ align = 'left', tone = 'brand', className = '' }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`flex flex-col gap-1.5 ${align === 'center' ? 'items-center' : 'items-start'} ${className}`}
    >
      <span className="block h-1.5 w-16 rounded-sm bg-[#E0020F]" />
      <span className={`block h-1.5 w-16 rounded-sm ${tone === 'light' ? 'bg-white' : 'bg-[#036FE7]'}`} />
    </div>
  )
}
