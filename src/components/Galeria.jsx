import React, { useState, useEffect } from 'react'
import { CaretLeft, CaretRight, WhatsappLogo } from 'phosphor-react'
import './Galeria.css'

const Galeria = () => {
  const [images, setImages] = useState([])
  const [imageNames, setImageNames] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  const fetchDriveImages = async (folderId) => {
    try {
      const API_KEY = import.meta.env.VITE_API_KEY
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+(mimeType='image/jpeg'+or+mimeType='image/png'+or+mimeType='image/webp'+or+mimeType='image/jpg'+or+mimeType='image/gif')+and+trashed=false&key=${API_KEY}&fields=files(id,name,mimeType)&pageSize=20`
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
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
  }

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const folderId = import.meta.env.VITE_GALERIA_FOLDER_ID
        const result = await fetchDriveImages(folderId)
        
        if (result.error) {
          console.error('Erro ao carregar imagens do Google Drive:', result.error)
          setImages([
            'https://placehold.co/800x600/2d2d2d/d4af37?text=Erro+ao+carregar'
          ])
          setImageNames(['Erro ao carregar'])
        } else if (result.files && result.files.length > 0) {
          const imageUrls = result.files.map(file => getDirectImageUrl(file.id))
          const names = result.files.map(file => file.name.replace(/\.[^/.]+$/, ''))
          setImages(imageUrls)
          setImageNames(names)
        } else {
          setImages([
            'https://placehold.co/800x600/2d2d2d/d4af37?text=Nenhuma+imagem+encontrada'
          ])
          setImageNames(['Nenhuma imagem encontrada'])
        }
        
        setLoading(false)
      } catch (error) {
        console.error('Erro ao carregar imagens:', error)
        setImages([
          'https://placehold.co/800x600/2d2d2d/d4af37?text=Erro+ao+carregar'
        ])
        setImageNames(['Erro ao carregar'])
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const isDesktop = window.innerWidth > 968
      const step = isDesktop ? 2 : 1
      return prevIndex === 0 ? Math.max(0, images.length - step) : Math.max(0, prevIndex - step)
    })
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const isDesktop = window.innerWidth > 968
      const step = isDesktop ? 2 : 1
      const maxIndex = isDesktop ? images.length - 2 : images.length - 1
      return prevIndex >= maxIndex ? 0 : prevIndex + step
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
          const maxIndex = isDesktop ? images.length - 2 : images.length - 1
          return prevIndex >= maxIndex ? 0 : prevIndex + step
        })
      }, 10000)

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
              const isDesktop = window.innerWidth > 968
              const isVisible = isDesktop 
                ? (index === currentIndex || index === currentIndex + 1)
                : (index === currentIndex)
              
              return (
                <div
                  key={index}
                  className={`carousel-slide ${isVisible ? 'active' : ''} ${
                    index === currentIndex ? 'primary' : ''
                  }`}
                >
                  <a 
                    href={`https://wa.me/5544999435647?text=${encodeURIComponent(`Olá, vi seu produto ${imageNames[index] || `Imagem ${index + 1}`}, gostaria de saber mais!`)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="image-link"
                  >
                    <img 
                      src={image} 
                      alt={`Ponto do Pescador ${index + 1}`}
                      className="carousel-image"
                    />
                    <div className="image-overlay">
                      <div className="overlay-icon">
                        <WhatsappLogo size={32} weight="fill" />
                      </div>
                      <div className="overlay-label">
                        {imageNames[index] || `Imagem ${index + 1}`}
                      </div>
                    </div>
                  </a>
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
      </div>
    </section>
  )
}

export default Galeria

