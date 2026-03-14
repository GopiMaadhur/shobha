"use client"

import { useState } from "react"

type GalleryImage = {
  image: string
}

type GallerySectionProps = {
  items: GalleryImage[]
}

export default function GallerySection({ items }: GallerySectionProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setSelected(null)
      setIsClosing(false)
    }, 300)
  }

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelected(item.image)}
          >
            <img
              src={item.image}
              alt={`Gallery image ${i + 1}`}
              className="w-full h-60 object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300
            ${isClosing ? "bg-black/0 backdrop-blur-none" : "bg-black/85 backdrop-blur-sm"}`}
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white text-3xl font-light transition-all duration-200 hover:rotate-90 hover:scale-110"
            onClick={handleClose}
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={selected}
            alt="Full view"
            style={{
              animation: isClosing
                ? "lightboxOut 0.3s ease-in forwards"
                : "lightboxIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
            }}
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_25px_80px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        @keyframes lightboxIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes lightboxOut {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.85); }
        }
      `}</style>
    </div>
  )
}