import React from 'react'
import './Sobre.css'

const Sobre = () => {
  return (
    <section id="sobre" className="sobre-section">
      <h2 className="section-title">Sobre Nós</h2>
      <div className="sobre-content">
        <div className="sobre-text">
          <h3 className="local-name">Ponto do Pescador - Paranavaí</h3>
          <p className="descricao">
            Bem-vindo ao Ponto do Pescador, o melhor lugar para desfrutar de peixes frescos 
            e pratos deliciosos em Paranavaí. Nossa paixão pela culinária à base de peixe 
            nos torna referência na região, oferecendo qualidade, sabor e um ambiente acolhedor 
            para toda a família.
          </p>
          <p className="descricao">
            Com anos de experiência, preparamos cada prato com carinho e dedicação, utilizando 
            sempre os melhores ingredientes e técnicas tradicionais que garantem o sabor autêntico 
            que nossos clientes tanto apreciam.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sobre

