"use client"

import { useState } from "react"

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      id: 0,
      title: "Qurban Individu",
      description:
        "Paket qurban untuk individu dengan pilihan hewan berkualitas dan distribusi ke daerah pilihan Anda.",
      features: [
        "Pilihan domba premium (25-30kg)",
        "Sertifikat qurban digital",
        "Laporan penyembelihan dengan foto",
        "Distribusi ke daerah pilihan",
        "Doa khusus untuk Anda",
      ],
      price: "Rp 2.500.000",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 1,
      title: "Qurban Keluarga",
      description: "Paket qurban untuk keluarga dengan pilihan sapi berkualitas dan distribusi ke daerah pilihan Anda.",
      features: [
        "1/7 sapi premium (min. 200kg)",
        "Sertifikat qurban digital",
        "Laporan penyembelihan dengan foto dan video",
        "Distribusi ke daerah pilihan",
        "Doa khusus untuk keluarga Anda",
      ],
      price: "Rp 3.200.000",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Qurban Korporasi",
      description:
        "Paket qurban untuk perusahaan dengan pilihan hewan berkualitas dan distribusi ke daerah pilihan Anda.",
      features: [
        "Pilihan sapi utuh atau beberapa domba",
        "Sertifikat qurban digital dengan logo perusahaan",
        "Laporan lengkap dengan foto dan video",
        "Distribusi ke daerah pilihan",
        "Publikasi di media sosial (opsional)",
      ],
      price: "Mulai Rp 15.000.000",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Layanan Kami</span>
          <h2 className="section-title">Pilihan Paket Qurban</h2>
          <p className="section-description">
            Kami menyediakan berbagai paket qurban yang dapat disesuaikan dengan kebutuhan Anda
          </p>
        </div>

        <div className="services-tabs">
          {services.map((service, index) => (
            <button
              key={service.id}
              className={`service-tab ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="services-content">
          {services.map((service, index) => (
            <div key={service.id} className={`service-panel ${activeTab === index ? "active" : ""}`}>
              <div className="service-image">
                <img src={service.image || "/placeholder.svg"} alt={service.title} />
              </div>

              <div className="service-details">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i} className="service-feature">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-price">{service.price}</div>

                <a href="#contact" className="btn btn-primary">
                  Pesan Sekarang
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
