import React, { useState, useEffect } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import './Galeria.css'

const Galeria = () => {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  const fetchDriveImages = async (folderId) => {
    try {
      const API_KEY = import.meta.env.VITE_API_KEY
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+(mimeType='image/jpeg'+or+mimeType='image/png'+or+mimeType='image/webp'+or+mimeType='image/jpg'+or+mimeType='image/gif')&key=${API_KEY}&fields=files(id,name,mimeType)`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`)
      }

      const data = await response.json()

      if (data.error) {
        console.error('Erro na API do Google Drive:', data.error)
        return { error: data.error }
      }

      return { files: data.files || [] }
    } catch (error) {
      console.error('Erro ao buscar imagens:', error)
      return { error: error.message }
    }
  }

  const getDirectImageUrl = (fileId) => {
    return `https://drive.google.com/uc?export=view&id=${fileId}`
  }

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const folderId = import.meta.env.VITE_GALERIA_FOLDER_ID
        const result = await fetchDriveImages(folderId)
        
        if (result.error) {
          console.error('Erro ao carregar imagens do Google Drive:', result.error)
          setImages([
            'https://via.placeholder.com/800x600/2d2d2d/d4af37?text=Erro+ao+carregar'
          ])
        } else if (result.files && result.files.length > 0) {
          const imageUrls = result.files.map(file => getDirectImageUrl(file.id))
          setImages(imageUrls)
        } else {
          setImages([
            'https://via.placeholder.com/800x600/2d2d2d/d4af37?text=Nenhuma+imagem+encontrada'
          ])
        }
        
        setLoading(false)
      } catch (error) {
        console.error('Erro ao carregar imagens:', error)
        setImages([
          'https://via.placeholder.com/800x600/2d2d2d/d4af37?text=Erro+ao+carregar'
        ])
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Auto-play do carrossel
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
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
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
              >
                <img 
                  src={image} 
                  alt={`Ponto do Pescador ${index + 1}`}
                  className="carousel-image"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Erro ao carregar imagem:', image)
                    e.target.src = 'https://via.placeholder.com/800x600/2d2d2d/d4af37?text=Erro+ao+carregar+imagem'
                  }}
                />
              </div>
            ))}
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

