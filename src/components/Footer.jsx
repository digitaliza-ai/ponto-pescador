import React from 'react'
import { InstagramLogo, YoutubeLogo } from 'phosphor-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-content">
          {/* Coluna 1: Logo/Nome */}
          <div className="footer-section brand">
            <h3>Ponto do Pescador</h3>
            <p>Paranavaí - PR</p>
          </div>

          {/* Coluna 2: Redes Sociais */}
          <div className="footer-section social">
            <h3>Redes Sociais</h3>
            <div className="social-links">
              <a 
                href="https://www.instagram.com/opontodopescadorparanavai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <InstagramLogo size={24} weight="fill" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.youtube.com/@alexota8137" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <YoutubeLogo size={24} weight="fill" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Ponto do Pescador. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer