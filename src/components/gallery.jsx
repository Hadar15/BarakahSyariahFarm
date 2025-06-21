"use client"

import { useState } from "react"

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null)

  const images = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Hewan Qurban",
      category: "hewan",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Proses Penyembelihan",
      category: "penyembelihan",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Distribusi Daging",
      category: "distribusi",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Penerima Manfaat",
      category: "penerima",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Tim Qurban Halal",
      category: "tim",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Dokumentasi Qurban",
      category: "dokumentasi",
    },
  ]

  const openLightbox = (image) => {
    setActiveImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setActiveImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Galeri Kami</span>
          <h2 className="section-title">Dokumentasi Qurban</h2>
          <p className="section-description">Momen-momen berharga dalam pelaksanaan ibadah qurban</p>
        </div>

        <div className="gallery-grid">
          {images.map((image) => (
            <div key={image.id} className="gallery-item" onClick={() => openLightbox(image)}>
              <div className="gallery-image">
                <img src={image.src || "/placeholder.svg"} alt={image.alt} />
              </div>
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>{image.alt}</h3>
                  <span className="gallery-category">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="lightbox-image">
              <img src={activeImage.src || "/placeholder.svg"} alt={activeImage.alt} />
            </div>
            <div className="lightbox-caption">
              <h3>{activeImage.alt}</h3>
              <p>{activeImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
