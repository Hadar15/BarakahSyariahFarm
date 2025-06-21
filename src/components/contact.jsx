"use client"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setFormStatus({
      submitted: true,
      success: true,
      message: "Pesanan Anda telah diterima. Tim kami akan segera menghubungi Anda untuk konfirmasi.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      product: "",
      quantity: "",
      message: "",
    })

    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      })
    }, 5000)
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Hubungi Kami</span>
          <h2 className="section-title">Pesan Daging Sapi Halal</h2>
          <p className="section-description">
            Hubungi kami untuk pemesanan atau konsultasi tentang produk daging sapi halal berkualitas
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Form Pemesanan</h3>
                <p>Isi formulir di bawah ini untuk memesan produk kami</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap Anda"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan email Anda"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Masukkan nomor WhatsApp Anda"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="product">Produk yang Diinginkan</label>
                  <select id="product" name="product" value={formData.product} onChange={handleChange} required>
                    <option value="">Pilih Produk</option>
                    <option value="rendang">Daging Sapi Rendang</option>
                    <option value="giling">Daging Sapi Giling</option>
                    <option value="steak">Daging Sapi Steak</option>
                    <option value="sop">Daging Sapi Sop</option>
                    <option value="kurban">Daging Sapi Kurban</option>
                    <option value="slice">Daging Sapi Slice</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="quantity">Jumlah (kg)</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Masukkan jumlah dalam kg"
                  min="1"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Catatan Tambahan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Catatan khusus untuk pesanan Anda (opsional)"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Kirim Pesanan
              </button>

              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
              )}
            </form>
          </div>

          <div className="contact-info-wrapper">
            <div className="contact-info">
              <div className="contact-info-header">
                <h3>Informasi Kontak</h3>
                <p>Hubungi kami melalui informasi di bawah ini</p>
              </div>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h4>Alamat Farm</h4>
                    <p>
                      Jl. Peternakan Syariah No. 123
                      <br />
                      Bogor, Jawa Barat 16610
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h4>WhatsApp</h4>
                    <p>+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h4>Email</h4>
                    <p>info@barakahsyariahfarm.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h4>Jam Operasional</h4>
                    <p>
                      Senin - Sabtu: 07:00 - 18:00
                      <br />
                      Minggu: 08:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h4>Ikuti Kami</h4>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.479 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"></path>
                      <path d="M11.893 8.334c.144-.307.293-.317.403-.317.109 0 .268-.012.402-.012.133 0 .34.049.518.245.179.196.677.662.677 1.615s-.693 1.872-.79 2.005-.097.245-.293.049-.677-.662-.677-1.615.693-1.872.79-2.005z"></path>
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
