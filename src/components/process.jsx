export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Pilih Paket",
      description: "Pilih paket qurban yang sesuai dengan kebutuhan dan budget Anda.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Lakukan Pembayaran",
      description: "Bayar melalui berbagai metode pembayaran yang tersedia dan aman.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Konfirmasi",
      description: "Dapatkan konfirmasi dan bukti pembayaran qurban Anda melalui email.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Penyembelihan",
      description: "Hewan qurban Anda akan disembelih sesuai syariat pada hari Idul Adha.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Distribusi",
      description: "Daging qurban didistribusikan ke daerah yang Anda pilih atau yang membutuhkan.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
    },
    {
      id: 6,
      title: "Laporan",
      description: "Terima laporan lengkap tentang penyembelihan dan distribusi qurban Anda.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
  ]

  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Proses Qurban</span>
          <h2 className="section-title">Bagaimana Kami Bekerja</h2>
          <p className="section-description">Proses qurban yang mudah, transparan, dan sesuai syariat Islam</p>
        </div>

        <div className="process-steps">
          {steps.map((step) => (
            <div key={step.id} className="process-step">
              <div className="step-icon">
                {step.icon}
                <div className="step-number">{step.id}</div>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process-cta">
          <a href="#contact" className="btn btn-primary btn-lg">
            Mulai Sekarang
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
