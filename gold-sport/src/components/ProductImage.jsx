import { useState } from 'react'
import { ImageOff } from 'lucide-react'

// Shows the product image, or a clean placeholder if the file is missing.
export default function ProductImage({ src, alt, className = '' }) {
  const [error, setError] = useState(false)

  if (error || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-400 ${className}`}
      >
        <ImageOff size={28} />
        <span className="px-2 text-center text-xs">{alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      loading="lazy"
      className={className}
    />
  )
}
