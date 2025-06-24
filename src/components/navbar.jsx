"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import SignInModal from "./SignInModal"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const { isAuthenticated, user } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => { document.body.style.overflow = "auto" }
  }, [isMobileMenuOpen])

  const handleSignInClick = () => setIsSignInModalOpen(true)
  const handleCloseSignInModal = () => setIsSignInModalOpen(false)
  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false)

  return (
    <>
      <header className={`navbar${isScrolled ? " scrolled" : ""}`}> 
        <div className="navbar-container container">
          <a href="#home" className="navbar-logo" aria-label="Barakah Syariah Farm">
            <span className="logo-icon">☪</span>
            <span className="logo-text">
              <span className="logo-main">Barakah</span>
              <span className="logo-sub">Syariah Farm</span>
            </span>
          </a>
          <nav className={`navbar-menu${isMobileMenuOpen ? " open" : ""}`} aria-label="Main Navigation">
            <ul className="navbar-links">
              <li><a href="#home" className="navbar-link" onClick={handleMobileMenuClose}>Beranda</a></li>
              <li><a href="#about" className="navbar-link" onClick={handleMobileMenuClose}>Tentang</a></li>
              <li><a href="#products" className="navbar-link" onClick={handleMobileMenuClose}>Produk</a></li>
              <li><a href="#gallery" className="navbar-link" onClick={handleMobileMenuClose}>Galeri</a></li>
              <li><a href="#testimonials" className="navbar-link" onClick={handleMobileMenuClose}>Testimoni</a></li>
              <li><a href="#faqs" className="navbar-link" onClick={handleMobileMenuClose}>FAQ</a></li>
              <li><a href="#contact" className="navbar-link" onClick={handleMobileMenuClose}>Kontak</a></li>
            </ul>
          </nav>
          <div className="navbar-actions">
            <button 
              onClick={handleSignInClick}
              className="btn btn-primary navbar-signin"
              aria-label={isAuthenticated ? (user?.displayName || user?.email?.split('@')[0] || 'Profil') : 'Masuk'}
            >
              {isAuthenticated ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <span className="navbar-profile-name">{user?.displayName || user?.email?.split('@')[0]}</span>
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10,17 15,12 10,7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                  <span>Masuk</span>
                </>
              )}
            </button>
            <button 
              className={`hamburger${isMobileMenuOpen ? " open" : ""}`} 
              aria-label="Toggle menu" 
              aria-expanded={isMobileMenuOpen} 
              onClick={handleMobileMenuToggle}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && <div className="navbar-backdrop" onClick={handleMobileMenuClose}></div>}
      </header>
      <SignInModal isOpen={isSignInModalOpen} onClose={handleCloseSignInModal} />
    </>
  )
}

export default Navbar
