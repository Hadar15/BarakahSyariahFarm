export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Cara Kerja</h2>
          <p className="section-description">Proses mudah untuk berqurban dengan kami</p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Pilih Paket</h3>
            <p className="step-description">Pilih paket qurban yang sesuai dengan kebutuhan Anda.</p>
            <div className="step-connector">
              <div className="step-dot"></div>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">Lakukan Pembayaran</h3>
            <p className="step-description">Bayar melalui berbagai metode pembayaran yang tersedia.</p>
            <div className="step-connector">
              <div className="step-dot"></div>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Konfirmasi</h3>
            <p className="step-description">Dapatkan konfirmasi dan bukti pembayaran qurban Anda.</p>
            <div className="step-connector">
              <div className="step-dot"></div>
            </div>
          </div>

          <div className="step">
            <div className="step-number">4</div>
            <h3 className="step-title">Laporan Distribusi</h3>
            <p className="step-description">Terima laporan lengkap tentang penyembelihan dan distribusi qurban Anda.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
