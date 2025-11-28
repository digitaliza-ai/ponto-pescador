import React from 'react'
import './Endereco.css'

const Endereco = () => {
  // Endereço codificado para URL: Rua Takeshi Mitsuyasu, 1058 Jardim Ipê - Paranavaí - PR
  const mapUrl = "https://maps.google.com/maps?q=Rua%20Takeshi%20Mitsuyasu%2C%201058%20-%20Jardim%20Ip%C3%AA%2C%20Paranava%C3%AD%20-%20PR&t=m&z=16&output=embed";

  return (
    <section id="endereco" className="endereco">
      <div className="endereco-container">
        <h2 className="section-title">Nossa Localização</h2>
        <div className="endereco-content">
          <div className="endereco-info">
            <div className="address-details">
              <p><strong>Endereço: Rua Takeshi Mitsuyasu, 1058 Jardim Ipê 87706-290 - Paranavaí - PR</strong></p>
            </div>
            <div className="map-container">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Ponto do Pescador"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Endereco