import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

const CART_KEY = 'goldsport_cart'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem(CART_KEY) || '[]')
  )

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items))
  }, [items])

  const addToCart = (product, qty = 1, size = null) => {
    setItems((prev) => {
      const key = product.id + (size ? `__${size}` : '')
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [...prev, { key, id: product.id, name: product.name, price: product.price, image: product.image, size, qty }]
    })
  }

  const updateQty = (key, qty) =>
    setItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i))
        .filter((i) => i.qty > 0)
    )

  const removeFromCart = (key) =>
    setItems((prev) => prev.filter((i) => i.key !== key))

  const clearCart = () => setItems([])

  const { count, subtotal } = useMemo(() => {
    const count = items.reduce((s, i) => s + i.qty, 0)
    const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)
    return { count, subtotal }
  }, [items])

  return (
    <CartContext.Provider
      value={{ items, addToCart, updateQty, removeFromCart, clearCart, count, subtotal }}
    >
      {children}
    </CartContext.Provider>
  )
}
