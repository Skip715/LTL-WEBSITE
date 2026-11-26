// Full-width red + blue stripe, used under the header and above the footer.
export default function BrandStripe() {
  return (
    <div aria-hidden="true">
      <div className="h-[3px] bg-[#E0020F]" />
      <div className="h-[3px] bg-[#036FE7]" />
    </div>
  )
}
