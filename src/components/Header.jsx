import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <img 
            src="https://yt3.googleusercontent.com/ZcHDib0W_I1JvYcsB5rtk8LK_0ELcw8m8q8mUZIvcuW1GiHQqA7OyydgPMf-OByjC7F60tXQeA=s160-c-k-c0x00ffffff-no-rj" 
            alt="Ponto do Pescador Logo" 
            className="logo"
          />
          <h1 className="logo-text">Ponto do Pescador</h1>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <button onClick={() => scrollToSection('sobre')} className="nav-link">
            Sobre
          </button>
          <button onClick={() => scrollToSection('galeria')} className="nav-link">
            Galeria
          </button>
          <button onClick={() => scrollToSection('contato')} className="nav-link">
            Contato
          </button>
          <button onClick={() => scrollToSection('endereco')} className="nav-link">
            Endereço
          </button>
        </nav>
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header

