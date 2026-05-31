import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, Minus, Plus, ShoppingBag, ShoppingCart, CheckCircle2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import ProductImage from '../components/ProductImage'

export default function Cart() {
  const { items, updateQty, removeFromCart, clearCart, subtotal } = useCart()
  const [ordered, setOrdered] = useState(false)
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 9.99
  const total = subtotal + shipping

  if (ordered) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <CheckCircle2 size={64} className="mx-auto text-emerald-500" />
        <h1 className="mt-6 text-3xl font-bold">Order placed!</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Thanks for shopping with GOLD Sport. A confirmation is on its way.
        </p>
        <Link to="/" className="btn-primary mt-8">Continue shopping</Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <ShoppingBag size={64} className="mx-auto text-slate-300 dark:text-slate-700" />
        <h1 className="mt-6 text-3xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">Looks like you have not added anything yet.</p>
        <Link to="/equipment" className="btn-primary mt-8">Start shopping</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-8 flex items-center gap-3 text-4xl font-bold">
        <ShoppingCart className="text-electric-500" /> Your Cart
      </h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Items */}
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <div key={item.key} className="surface flex items-center gap-4 p-4">
              <Link to={`/product/${item.id}`} className="shrink-0">
                <ProductImage src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" />
              </Link>
              <div className="min-w-0 flex-1">
                <Link to={`/product/${item.id}`} className="line-clamp-1 font-semibold transition hover:text-electric-500">
                  {item.name}
                </Link>
                {item.size && <p className="text-sm text-slate-400">Size: {item.size}</p>}
                <p className="text-sm font-bold text-electric-500">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center rounded-lg border border-slate-300 dark:border-slate-700">
                <button onClick={() => updateQty(item.key, item.qty - 1)} className="grid h-9 w-9 place-items-center"><Minus size={14} /></button>
                <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                <button onClick={() => updateQty(item.key, item.qty + 1)} className="grid h-9 w-9 place-items-center"><Plus size={14} /></button>
              </div>
              <p className="hidden w-20 text-right font-semibold sm:block">${(item.price * item.qty).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.key)} aria-label="Remove"
                className="grid h-9 w-9 place-items-center rounded-lg text-slate-400 transition hover:bg-red-500/10 hover:text-red-500">
                <Trash2 size={17} />
              </button>
            </div>
          ))}
          <button onClick={clearCart} className="text-sm text-slate-400 transition hover:text-red-500">Clear cart</button>
        </div>

        {/* Summary */}
        <div className="h-fit lg:sticky lg:top-24">
          <div className="surface space-y-4 p-6">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
            <Row label="Shipping" value={shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`} />
            {shipping === 0 && subtotal > 0 && (
              <p className="text-xs text-emerald-500">🎉 You unlocked free shipping!</p>
            )}
            <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
              <Row label="Total" value={`$${total.toFixed(2)}`} bold />
            </div>
            <button onClick={() => { setOrdered(true); clearCart() }} className="btn-primary w-full">
              Checkout
            </button>
            <Link to="/" className="block text-center text-sm text-slate-400 hover:text-electric-500">Continue shopping</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value, bold }) {
  return (
    <div className={`flex justify-between ${bold ? 'text-lg font-bold' : 'text-slate-500 dark:text-slate-400'}`}>
      <span>{label}</span>
      <span className={bold ? 'text-electric-500' : ''}>{value}</span>
    </div>
  )
}
