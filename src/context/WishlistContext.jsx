import { createContext, useContext, useEffect, useState } from 'react'

const WishlistContext = createContext()
export const useWishlist = () => useContext(WishlistContext)

const KEY = 'goldsport_wishlist'

export function WishlistProvider({ children }) {
  const [ids, setIds] = useState(() =>
    JSON.parse(localStorage.getItem(KEY) || '[]')
  )

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(ids))
  }, [ids])

  const toggle = (id) =>
    setIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )

  const has = (id) => ids.includes(id)

  return (
    <WishlistContext.Provider value={{ ids, toggle, has, count: ids.length }}>
      {children}
    </WishlistContext.Provider>
  )
}
