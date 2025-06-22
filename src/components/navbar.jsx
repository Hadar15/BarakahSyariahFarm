"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import SignInModal from "./SignInModal"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(3)
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const { isAuthenticated, user } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSignInClick = () => {
    setIsSignInModalOpen(true)
  }

  const handleCloseSignInModal = () => {
    setIsSignInModalOpen(false)
  }

  return (
    <>
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="navbar-container">
            <div className="navbar-logo">
              <div className="logo-icon">☪</div>
              <div className="logo-text">
                <div className="logo-main">Barakah</div>
                <div className="logo-sub">Syariah Farm</div>
              </div>
            </div>

            <nav className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
              <ul className="navbar-links">
                <li>
                  <a href="#home" className="navbar-link">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#about" className="navbar-link">
                    Tentang
                  </a>
                </li>
                <li>
                  <a href="#products" className="navbar-link">
                    Produk
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="navbar-link">
                    Testimoni
                  </a>
                </li>
                <li>
                  <a href="#contact" className="navbar-link">
                    Kontak
                  </a>
                </li>
              </ul>
            </nav>

            <div className="navbar-actions">
              <div className="cart-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"></path>
                  <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"></path>
                  <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"></path>
                </svg>
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </div>
              
              {isAuthenticated ? (
                <button 
                  onClick={handleSignInClick}
                  className="btn btn-secondary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  {user?.displayName || user?.email?.split('@')[0] || 'Profil'}
                </button>
              ) : (
                <button 
                  onClick={handleSignInClick}
                  className="btn btn-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10,17 15,12 10,7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                  Masuk
                </button>
              )}
              
              <button className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <SignInModal 
        isOpen={isSignInModalOpen} 
        onClose={handleCloseSignInModal} 
      />
    </>
  )
}
