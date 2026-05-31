import { CATEGORIES, getByCategory } from '../data/products'
import ProductGrid from '../components/ProductGrid'

// One component powers all four category routes (equipment, supplements, men, bags).
// The category slug is passed as a prop from App.jsx.
export default function CategoryPage({ slug }) {
  const meta = CATEGORIES.find((c) => c.slug === slug)
  const items = getByCategory(slug)

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <header className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-500">
          GOLD Sport
        </p>
        <h1 className="mt-1 text-4xl font-bold sm:text-5xl">{meta?.label || 'Products'}</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">{meta?.tagline}</p>
      </header>
      <ProductGrid items={items} />
    </div>
  )
}
