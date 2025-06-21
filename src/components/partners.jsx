"use client"

import { useEffect, useRef } from "react"

export default function Partners() {
  const sectionRef = useRef(null)
  const partnersRef = useRef(null)

  const partners = [
    { id: 1, name: "Partner 1", logo: "/placeholder.svg?height=100&width=200" },
    { id: 2, name: "Partner 2", logo: "/placeholder.svg?height=100&width=200" },
    { id: 3, name: "Partner 3", logo: "/placeholder.svg?height=100&width=200" },
    { id: 4, name: "Partner 4", logo: "/placeholder.svg?height=100&width=200" },
    { id: 5, name: "Partner 5", logo: "/placeholder.svg?height=100&width=200" },
    { id: 6, name: "Partner 6", logo: "/placeholder.svg?height=100&width=200" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (partnersRef.current) observer.observe(partnersRef.current)

    return () => {
      if (partnersRef.current) observer.unobserve(partnersRef.current)
    }
  }, [])

  return (
    <section id="partners" className="partners" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Mitra Kami</span>
          <h2 className="section-title">Bekerja Sama Dengan</h2>
          <span className="section-divider"></span>
        </div>

        <div className="partners-grid" ref={partnersRef}>
          {partners.map((partner) => (
            <div key={partner.id} className="partner-item">
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
