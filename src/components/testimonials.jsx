"use client"

import { useState, useEffect } from "react"

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Ibu Sari Dewi",
      role: "Ibu Rumah Tangga",
      image: "/placeholder.svg?height=150&width=150",
      content:
        "Alhamdulillah, daging sapi dari Barakah Syariah Farm sangat berkualitas dan halal. Harganya juga terjangkau untuk keluarga. Anak-anak suka sekali dengan rendang yang saya buat menggunakan daging dari sini.",
      rating: 5,
    },
    {
      id: 2,
      name: "Pak Ahmad Hidayat",
      role: "Pengusaha Kuliner",
      image: "/placeholder.svg?height=150&width=150",
      content:
        "Sebagai pemilik warung makan, saya sangat puas dengan kualitas daging sapi dari Barakah Syariah Farm. Pelanggan saya juga memuji kelezatan masakan yang menggunakan daging dari sini. Recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Ibu Fatimah",
      role: "Chef Profesional",
      image: "/placeholder.svg?height=150&width=150",
      content:
        "Kualitas daging sapi premium dari Barakah Syariah Farm sangat memuaskan. Teksturnya empuk dan rasanya lezat. Cocok untuk berbagai jenis masakan, dari rendang hingga steak. Pasti akan order lagi!",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setActiveSlide(index)
  }

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Testimoni</span>
          <h2 className="section-title">Apa Kata Pelanggan Kami</h2>
          <p className="section-description">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut testimoni dari pelanggan setia Barakah Syariah Farm
          </p>
        </div>

        <div className="testimonials-slider">
          <div className="testimonials-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <div className="testimonial-content">{testimonial.content}</div>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`star ${i < testimonial.rating ? "filled" : ""}`}>
                        ⭐
                      </span>
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    </div>
                    <div>
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-arrow slider-prev" onClick={prevSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button className="slider-arrow slider-next" onClick={nextSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${activeSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}