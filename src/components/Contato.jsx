import React from 'react'
import './Contato.css'

const Contato = () => {
  return (
    <section id="contato" className="contato-section">
      <h2 className="section-title">Contato</h2>
      <div className="contato-cards">
        <div className="contato-card">
          <div className="card-icon">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <h3 className="card-title">Telefone</h3>
          <p className="card-content">
            <a 
              href="https://wa.me/5544999435647" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              (44) 99943-5647
            </a>
          </p>
        </div>

        <div className="contato-card">
          <div className="card-icon">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          <h3 className="card-title">Instagram</h3>
          <p className="card-content">
            <a 
              href="https://www.instagram.com/opontodopescadorparanavai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              @opontodopescadorparanavai
            </a>
          </p>
        </div>

        <div className="contato-card">
          <div className="card-icon">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </div>
          <h3 className="card-title">YouTube</h3>
          <p className="card-content">
            <a 
              href="https://www.youtube.com/@alexota8137" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              @alexota8137
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contato

