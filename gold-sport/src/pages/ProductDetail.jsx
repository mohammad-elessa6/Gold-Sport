import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ShoppingCart, Heart, Star, ChevronLeft, Minus, Plus, Check } from 'lucide-react'
import { getProductById, getByCategory } from '../data/products'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import ProductImage from '../components/ProductImage'
import ProductCard from '../components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()
  const { has, toggle } = useWishlist()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState(null)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link to="/" className="btn-primary mt-6">Back to home</Link>
      </div>
    )
  }

  const related = getByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4)
  const wished = has(product.id)

  const handleAdd = () => {
    addToCart(product, qty, product.sizes ? size : null)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <Link to={`/${product.category}`} className="mb-6 inline-flex items-center gap-1 text-sm text-slate-500 transition hover:text-electric-500">
        <ChevronLeft size={16} /> Back to {product.category}
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="surface overflow-hidden">
          <ProductImage src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-electric-500">{product.brand}</span>
          <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-amber-400">
            <Star size={16} fill="currentColor" /> {product.rating}
            <span className="text-slate-400">· In stock</span>
          </div>
          <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">{product.longDescription}</p>

          {product.nutrition && (
            <div className="mt-5 space-y-1 rounded-xl border border-slate-200 p-4 text-sm dark:border-slate-800">
              <p className="text-slate-500 dark:text-slate-400">{product.nutrition}</p>
              <p className="text-slate-400">{product.usage}</p>
            </div>
          )}

          {product.sizes && (
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold">Select size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button key={s} onClick={() => setSize(s)}
                    className={`h-11 w-12 rounded-lg border font-medium transition
                      ${size === s
                        ? 'border-electric-500 bg-electric-600 text-white'
                        : 'border-slate-300 hover:border-electric-500 dark:border-slate-700'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-7 text-4xl font-bold text-electric-500">${product.price.toFixed(2)}</div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-xl border border-slate-300 dark:border-slate-700">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-12 w-12 place-items-center"><Minus size={16} /></button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="grid h-12 w-12 place-items-center"><Plus size={16} /></button>
            </div>

            <button onClick={handleAdd} className="btn-primary flex-1 sm:flex-none">
              {added ? <><Check size={18} /> Added!</> : <><ShoppingCart size={18} /> Add to cart</>}
            </button>

            <button onClick={() => toggle(product.id)} aria-label="Wishlist"
              className={`grid h-12 w-12 place-items-center rounded-xl border transition
                ${wished ? 'border-red-500 bg-red-500 text-white' : 'border-slate-300 hover:border-red-500 hover:text-red-500 dark:border-slate-700'}`}>
              <Heart size={20} fill={wished ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-bold">You might also like</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  )
}
