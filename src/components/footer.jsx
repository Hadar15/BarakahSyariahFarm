export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <div className="footer-logo">
                <div className="logo-icon">☪</div>
                <div className="logo-text">
                  <div className="logo-main">Barakah</div>
                  <div className="logo-sub">Syariah Farm</div>
                </div>
              </div>
              <p className="footer-description">
                Barakah Syariah Farm adalah penyedia daging sapi halal berkualitas tinggi dengan harga terjangkau. Kami
                berkomitmen untuk menyediakan produk halal terbaik sesuai syariat Islam.
              </p>
              <div className="footer-social">
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

            <div className="footer-links">
              <h3 className="footer-title">Navigasi</h3>
              <ul className="footer-menu">
                <li>
                  <a href="#home">Beranda</a>
                </li>
                <li>
                  <a href="#about">Tentang Kami</a>
                </li>
                <li>
                  <a href="#products">Produk</a>
                </li>
                <li>
                  <a href="#testimonials">Testimoni</a>
                </li>
                <li>
                  <a href="#contact">Kontak</a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h3 className="footer-title">Produk</h3>
              <ul className="footer-menu">
                <li>
                  <a href="#products">Daging Sapi Premium</a>
                </li>
                <li>
                  <a href="#products">Daging Sapi Ekonomis</a>
                </li>
                <li>
                  <a href="#products">Daging Sapi Kurban</a>
                </li>
                <li>
                  <a href="#products">Potongan Khusus</a>
                </li>
                <li>
                  <a href="#products">Paket Hemat</a>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3 className="footer-title">Kontak</h3>
              <ul className="footer-contact-info">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Jl. Peternakan Syariah No. 123, Bogor, Jawa Barat 16610</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+62 812 3456 7890</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>info@barakahsyariahfarm.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">&copy; {currentYear} Barakah Syariah Farm. Semua Hak Dilindungi.</p>
            <div className="footer-legal">
              <a href="#">Syarat & Ketentuan</a>
              <a href="#">Kebijakan Privasi</a>
              <a href="#">Sertifikat Halal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
