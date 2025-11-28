import React, { useState, useEffect } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import './Galeria.css'

const Galeria = () => {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadImages = async () => {
      try {
        // IDs de exemplo - substitua pelos IDs reais dos arquivos do Google Drive
        const imageIds = [
          // Adicione aqui os IDs dos arquivos do Google Drive
          // Formato: https://drive.google.com/uc?export=view&id=FILE_ID
        ]
        
        // Se não houver IDs configurados, use imagens placeholder
        if (imageIds.length === 0) {
          setImages([
            'https://via.placeholder.com/800x600?text=Imagem+1',
            'https://via.placeholder.com/800x600?text=Imagem+2',
            'https://via.placeholder.com/800x600?text=Imagem+3',
            'https://via.placeholder.com/800x600?text=Imagem+4',
          ])
        } else {
          const driveImages = imageIds.map(id => 
            `https://drive.google.com/uc?export=view&id=${id}`
          )
          setImages(driveImages)
        }
        setLoading(false)
      } catch (error) {
        console.error('Erro ao carregar imagens:', error)
        setLoading(false)
      }
    }

    loadImages()
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const isDesktop = window.innerWidth > 968
      const step = isDesktop ? 2 : 1
      const newIndex = prevIndex - step
      return newIndex < 0 ? images.length - step : newIndex
    })
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const isDesktop = window.innerWidth > 968
      const step = isDesktop ? 2 : 1
      const newIndex = prevIndex + step
      return newIndex >= images.length ? 0 : newIndex
    })
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Auto-play do carrossel
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const isDesktop = window.innerWidth > 968
          const step = isDesktop ? 2 : 1
          const newIndex = prevIndex + step
          return newIndex >= images.length ? 0 : newIndex
        })
      }, 5000) // Muda a cada 5 segundos

      return () => clearInterval(interval)
    }
  }, [images.length])

  if (loading) {
    return (
      <section id="galeria" className="galeria-section">
        <h2 className="section-title">Galeria</h2>
        <div className="loading">Carregando imagens...</div>
      </section>
    )
  }

  return (
    <section id="galeria" className="galeria-section">
      <h2 className="section-title">Galeria</h2>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <button 
            className="carousel-button carousel-button-prev" 
            onClick={goToPrevious}
            aria-label="Imagem anterior"
          >
            <CaretLeft size={32} weight="bold" />
          </button>
          
          <div className="carousel-slide-container">
            {images.map((image, index) => {
              // Em desktop mostra 2 imagens (currentIndex e currentIndex + 1)
              // Em mobile mostra apenas 1 (currentIndex)
              const nextIndex = (currentIndex + 1) % images.length
              const isVisible = index === currentIndex || index === nextIndex
              
              return (
                <div
                  key={index}
                  className={`carousel-slide ${isVisible ? 'active' : ''} ${
                    index === currentIndex ? 'primary' : ''
                  }`}
                  data-index={index}
                  data-current={currentIndex}
                >
                  <img 
                    src={image} 
                    alt={`Ponto do Pescador ${index + 1}`}
                    className="carousel-image"
                    loading="lazy"
                  />
                </div>
              )
            })}
          </div>

          <button 
            className="carousel-button carousel-button-next" 
            onClick={goToNext}
            aria-label="Próxima imagem"
          >
            <CaretRight size={32} weight="bold" />
          </button>
        </div>

        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galeria

