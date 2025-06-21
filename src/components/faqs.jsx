"use client"

import { useState } from "react"

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "Bagaimana cara berqurban melalui Qurban Halal?",
      answer:
        "Anda dapat berqurban melalui Qurban Halal dengan memilih paket qurban yang tersedia, melakukan pembayaran, dan kami akan mengirimkan konfirmasi serta laporan pelaksanaan qurban kepada Anda.",
    },
    {
      id: 2,
      question: "Apakah hewan qurban memenuhi syarat syariat Islam?",
      answer:
        "Ya, semua hewan qurban yang kami sediakan telah memenuhi syarat syariat Islam, yaitu cukup umur, sehat, dan tidak cacat. Kami juga memastikan proses penyembelihan dilakukan sesuai dengan syariat Islam.",
    },
    {
      id: 3,
      question: "Bagaimana proses distribusi daging qurban?",
      answer:
        "Daging qurban akan didistribusikan ke daerah-daerah yang membutuhkan, terutama daerah terpencil dan kurang mampu. Anda juga dapat memilih daerah distribusi sesuai keinginan Anda.",
    },
    {
      id: 4,
      question: "Apakah saya akan mendapatkan laporan pelaksanaan qurban?",
      answer:
        "Ya, Anda akan mendapatkan laporan lengkap pelaksanaan qurban yang berisi foto hewan qurban, proses penyembelihan, dan distribusi daging qurban kepada penerima manfaat.",
    },
    {
      id: 5,
      question: "Kapan batas waktu pendaftaran qurban?",
      answer:
        "Batas waktu pendaftaran qurban adalah H-1 sebelum Hari Raya Idul Adha. Namun, kami menyarankan Anda untuk mendaftar lebih awal untuk memastikan ketersediaan hewan qurban.",
    },
    {
      id: 6,
      question: "Apakah saya bisa berqurban untuk orang yang sudah meninggal?",
      answer:
        "Ya, Anda dapat berqurban untuk orang yang sudah meninggal. Anda cukup mencantumkan nama orang tersebut saat melakukan pendaftaran qurban.",
    },
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">FAQ</span>
          <h2 className="section-title">Pertanyaan Umum</h2>
          <p className="section-description">
            Jawaban untuk pertanyaan yang sering diajukan tentang layanan qurban kami
          </p>
        </div>

        <div className="faqs-container">
          {faqs.map((faq, index) => (
            <div key={faq.id} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faqs-cta">
          <p>Masih punya pertanyaan lain?</p>
          <a href="#contact" className="btn btn-primary">
            Hubungi Kami
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
