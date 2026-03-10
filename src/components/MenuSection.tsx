type Item = {
  name: string
  price: string
}

type SectionProps = {
  title: string
  items: Item[]
}

export default function MenuSection({ title, items }: SectionProps) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 uppercase tracking-wider"
        // style={{ textShadow: "2px 8px 20px rgba(0, 0, 0, 0.92)" }}
        >
        {title}
      </h3>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center text-sm text-white">
            
            <span className="whitespace-nowrap">{item.name}</span>

            <div className="flex-1 border-b border-dashed border-[var(--color-primary)] mx-4"></div>

            <span className="whitespace-nowrap text-white">
              {item.price}
            </span>

          </div>
        ))}
      </div>
    </div>
  )
}