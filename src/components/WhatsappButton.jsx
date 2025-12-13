import React from 'react'
import { WhatsappLogo } from 'phosphor-react'
import './WhatsappButton.css'

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5544999435647"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Fale conosco no WhatsApp"
    >
      <WhatsappLogo size={32} weight="fill" />
    </a>
  )
}

export default WhatsappButton
