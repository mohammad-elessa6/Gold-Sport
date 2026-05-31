import { Link } from 'react-router-dom'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import ProductImage from './ProductImage'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { has, toggle } = useWishlist()
  const wished = has(product.id)

  return (
    <div className="group surface flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-electric-500/60 hover:shadow-glow">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <ProductImage
            src={product.image}
            alt={product.name}
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <button
          onClick={() => toggle(product.id)}
          aria-label="Toggle wishlist"
          className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full backdrop-blur transition
            ${wished
              ? 'bg-red-500 text-white'
              : 'bg-white/80 text-slate-600 hover:text-red-500 dark:bg-slate-900/70 dark:text-slate-300'}`}
        >
          <Heart size={17} fill={wished ? 'currentColor' : 'none'} />
        </button>
        <span className="absolute left-3 top-3 rounded-full bg-slate-900/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-100 backdrop-blur">
          {product.brand}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center gap-1 text-xs text-amber-400">
          <Star size={13} fill="currentColor" /> {product.rating}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-2 text-base font-semibold leading-snug transition group-hover:text-electric-500">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-slate-500 dark:text-slate-400">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-electric-500">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-electric-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-electric-500 hover:shadow-glow active:scale-95"
          >
            <ShoppingCart size={15} /> Add
          </button>
        </div>
      </div>
    </div>
  )
}
