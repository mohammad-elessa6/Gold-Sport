import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { useWishlist } from '../context/WishlistContext'
import { getProductById } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Wishlist() {
  const { ids } = useWishlist()
  const items = ids.map(getProductById).filter(Boolean)

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-8 flex items-center gap-3 text-4xl font-bold">
        <Heart className="text-red-500" fill="currentColor" /> Your Wishlist
      </h1>

      {items.length === 0 ? (
        <div className="py-24 text-center">
          <Heart size={64} className="mx-auto text-slate-300 dark:text-slate-700" />
          <p className="mt-6 text-xl font-semibold">No favorites yet</p>
          <p className="mt-2 text-slate-500 dark:text-slate-400">Tap the heart on any product to save it here.</p>
          <Link to="/equipment" className="btn-primary mt-8">Browse products</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  )
}
