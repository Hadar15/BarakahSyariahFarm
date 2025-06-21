export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-pattern"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">☪ 100% Halal & Berkualitas</div>
            <h1 className="hero-title">
              Daging Sapi <span className="highlight">Halal</span>
              <br />
              Berkualitas & Terjangkau
            </h1>
            <p className="hero-subtitle">
              Nikmati kelezatan daging sapi halal pilihan dari Barakah Syariah Farm. Dipotong sesuai syariat Islam
              dengan kualitas terbaik dan harga yang terjangkau.
            </p>
            <div className="hero-cta">
              <a href="#products" className="btn btn-primary btn-lg">
                Lihat Produk
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#about" className="btn btn-outline btn-lg">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <div className="hero-feature-icon">☪</div>
              <h3>100% Halal</h3>
              <p>Disembelih sesuai syariat Islam dengan sertifikat halal</p>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon">🥩</div>
              <h3>Kualitas Premium</h3>
              <p>Daging sapi pilihan dengan kualitas terbaik</p>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon">💰</div>
              <h3>Harga Terjangkau</h3>
              <p>Harga bersaing dengan kualitas yang tidak murahan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
