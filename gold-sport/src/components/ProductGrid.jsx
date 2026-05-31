import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import ProductCard from './ProductCard'

// Reusable grid with live search + sort. Used by every category page.
export default function ProductGrid({ items, showControls = true }) {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('featured')

  const filtered = useMemo(() => {
    let out = items.filter((p) =>
      (p.name + p.brand + p.description).toLowerCase().includes(query.toLowerCase())
    )
    if (sort === 'low') out = [...out].sort((a, b) => a.price - b.price)
    if (sort === 'high') out = [...out].sort((a, b) => b.price - a.price)
    if (sort === 'rating') out = [...out].sort((a, b) => b.rating - a.rating)
    return out
  }, [items, query, sort])

  return (
    <div>
      {showControls && (
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 sm:max-w-sm">
            <Search size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="input-field pl-11"
            />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={18} className="text-slate-400" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="input-field cursor-pointer py-2.5"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-slate-500">No products match “{query}”.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <div key={p.id} style={{ animationDelay: `${i * 60}ms` }} className="animate-fade-up">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
