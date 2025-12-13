import React from 'react'
import { WhatsappLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react'
import './Contato.css'

const Contato = () => {
  return (
    <section id="contato" className="contato-section">
      <h2 className="section-title">Contato</h2>
      <div className="contato-cards">
        <a 
          href="https://wa.me/5544999435647" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="contato-card">
            <div className="card-icon">
              <WhatsappLogo size={48} weight="fill" />
            </div>
            <h3 className="card-title">WhatsApp</h3>
            <p className="card-content">(44) 99943-5647</p>
          </div>
        </a>

        <a 
          href="https://www.instagram.com/opontodopescadorparanavai/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="contato-card">
            <div className="card-icon">
              <InstagramLogo size={48} weight="fill" />
            </div>
            <h3 className="card-title">Instagram</h3>
            <p className="card-content">@opontodopescadorparanavai</p>
          </div>
        </a>

        <a 
          href="https://www.youtube.com/@alexota8137" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="contato-card">
            <div className="card-icon">
              <YoutubeLogo size={48} weight="fill" />
            </div>
            <h3 className="card-title">YouTube</h3>
            <p className="card-content">@alexota8137</p>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Contato

