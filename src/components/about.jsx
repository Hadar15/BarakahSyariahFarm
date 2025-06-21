export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Tentang Kami</span>
          <h2 className="section-title">Barakah Syariah Farm</h2>
          <p className="section-description">
            Menyediakan daging sapi halal berkualitas tinggi dengan komitmen pada prinsip-prinsip syariah dan kepuasan
            pelanggan
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/placeholder.svg?height=500&width=600" alt="Barakah Syariah Farm" />
          </div>

          <div className="about-text">
            <h3>Komitmen Kami</h3>
            <p>
              Barakah Syariah Farm berkomitmen untuk menyediakan daging sapi halal berkualitas tinggi dengan harga yang
              terjangkau. Kami memastikan setiap proses dari peternakan hingga pemotongan dilakukan sesuai dengan
              syariat Islam.
            </p>

            <h3>Visi & Misi</h3>
            <p>
              Menjadi penyedia daging sapi halal terpercaya yang mengutamakan kualitas, kebersihan, dan kepuasan
              pelanggan dengan tetap menjaga prinsip-prinsip syariah dalam setiap aspek bisnis.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"></path>
                  </svg>
                </div>
                <div className="about-feature-text">
                  <h4>Sertifikat Halal MUI</h4>
                  <p>Semua produk kami telah tersertifikasi halal oleh MUI</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="about-feature-text">
                  <h4>Kualitas Terjamin</h4>
                  <p>Daging sapi pilihan dengan standar kualitas internasional</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <path d="M20 8v6M23 11h-6"></path>
                  </svg>
                </div>
                <div className="about-feature-text">
                  <h4>Pelayanan Terbaik</h4>
                  <p>Tim profesional yang siap melayani kebutuhan Anda</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Pelanggan Puas</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Tahun Pengalaman</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Jenis Potongan</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Halal Terjamin</div>
          </div>
        </div>
      </div>
    </section>
  )
}
