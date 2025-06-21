"use client"

import { useState } from "react"

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("semua")

  const products = [
    {
      id: 1,
      name: "Daging Sapi Rendang",
      category: "premium",
      price: 85000,
      weight: "1 kg",
      image: "/placeholder.svg?height=300&width=400",
      description: "Potongan daging sapi pilihan untuk rendang yang empuk dan lezat",
      badge: "Terlaris",
      rating: 5,
    },
    {
      id: 2,
      name: "Daging Sapi Giling",
      category: "ekonomis",
      price: 65000,
      weight: "1 kg",
      image: "/placeholder.svg?height=300&width=400",
      description: "Daging sapi giling segar untuk berbagai masakan",
      badge: "Hemat",
      rating: 4,
    },
    {
      id: 3,
      name: "Daging Sapi Steak",
      category: "premium",
      price: 120000,
      weight: "500 gr",
      image: "/placeholder.svg?height=300&width=400",
      description: "Potongan sirloin premium untuk steak yang sempurna",
      badge: "Premium",
      rating: 5,
    },
    {
      id: 4,
      name: "Daging Sapi Sop",
      category: "ekonomis",
      price: 70000,
      weight: "1 kg",
      image: "/placeholder.svg?height=300&width=400",
      description: "Potongan daging dengan tulang untuk sop yang gurih",
      badge: "Favorit",
      rating: 4,
    },
    {
      id: 5,
      name: "Daging Sapi Kurban",
      category: "kurban",
      price: 95000,
      weight: "1 kg",
      image: "/placeholder.svg?height=300&width=400",
      description: "Daging sapi kurban berkualitas tinggi sesuai syariat",
      badge: "Halal",
      rating: 5,
    },
    {
      id: 6,
      name: "Daging Sapi Slice",
      category: "premium",
      price: 90000,
      weight: "500 gr",
      image: "/placeholder.svg?height=300&width=400",
      description: "Irisan tipis daging sapi untuk shabu-shabu dan yakiniku",
      badge: "Fresh",
      rating: 5,
    },
  ]

  const filters = [
    { id: "semua", label: "Semua Produk" },
    { id: "premium", label: "Premium" },
    { id: "ekonomis", label: "Ekonomis" },
    { id: "kurban", label: "Kurban" },
  ]

  const filteredProducts =
    activeFilter === "semua" ? products : products.filter((product) => product.category === activeFilter)

  return (
    <section id="products" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Produk Kami</span>
          <h2 className="section-title">Daging Sapi Halal Berkualitas</h2>
          <p className="section-description">
            Pilihan lengkap daging sapi halal dengan berbagai potongan sesuai kebutuhan masakan Anda
          </p>
        </div>

        <div className="products-filter">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image || "/placeholder.svg"} alt={product.name} />
                <div className="product-badge">{product.badge}</div>
                <div className="halal-badge">☪ Halal</div>
              </div>

              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-details">
                  <span className="product-weight">Berat: {product.weight}</span>
                  <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`star ${i < product.rating ? "filled" : ""}`}>
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>

                <div className="product-price">
                  <span className="currency">Rp</span>
                  {product.price.toLocaleString()}
                </div>

                <div className="product-actions">
                  <button className="btn btn-primary btn-cart">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"></path>
                      <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"></path>
                      <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"></path>
                    </svg>
                    Tambah ke Keranjang
                  </button>
                  <button className="btn-wishlist">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
