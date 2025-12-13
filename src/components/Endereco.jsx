import React from 'react'
import './Endereco.css'

const Endereco = () => {
  // Endereço codificado para URL: Av. Distrito Federal, 840 - Centro, Paranavaí - PR
  const mapUrl = "https://maps.google.com/maps?q=Av.%20Distrito%20Federal%2C%20840%20-%20Centro%2C%20Paranava%C3%AD%20-%20PR%2C%2087701-310&t=m&z=16&output=embed";

  return (
    <section id="endereco" className="endereco">
      <div className="endereco-container">
        <h2 className="section-title">Nossa Localização</h2>
        <div className="endereco-content">
          <div className="endereco-info">
            <div className="address-details">
              <p><strong>Endereço: Av. Distrito Federal, 840 - Centro, 87701-310 - Paranavaí - PR</strong></p>
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