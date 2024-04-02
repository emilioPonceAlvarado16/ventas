import React, { useState, useEffect, useRef } from 'react';

export default function ImageResizeModal({ onClose }) {
  const modalRef = useRef();
  const [scale, setScale] = useState(1); // Almacena la escala actual de la imagen
  const [imageUrl, setImageUrl] = useState("/images/image1.png");
  const [originalSize, setOriginalSize] = useState({ width: 200, height: 200 }); // Tamaño original de la imagen
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setTimeout(() => onClose(), 150);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Carga y establece el tamaño original de la imagen
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setOriginalSize({ width: img.width, height: img.height });
    };
    img.src = imageUrl;
  }, [imageUrl]);

  const handleScaleChange = (e) => {
    setScale(Number(e.target.value));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div ref={modalRef} style={{
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#080f25',
      color: 'white',
      zIndex: 1000,
      width: '800px',
      height: '600px',
      overflow: 'auto',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.23)',
      border: '1px solid #ddd',
      borderRadius: '10px'
    }}>
      <div style={{ marginBottom: '10px', textAlign: 'right' }}>
        <button onClick={onClose} style={{
          fontSize: '16px',
          padding: '5px 10px',
          backgroundColor: '#FFC107',
          color: '#080f25',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>Cerrar</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        <div style={{ flex: 1, padding: '10px', overflow: 'hidden' }}>
          <img src={imageUrl} alt="Imagen a redimensionar" style={{ 
            width: `${originalSize.width * scale}px`, 
            height: `${originalSize.height * scale}px` 
          }} />
        </div>
        <div style={{ width: '200px', padding: '10px', borderLeft: '1px solid #ddd' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Configuración de Escala</h3>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Escala:</label>
            <input type="number" min="0.1" step="0.1" value={scale} onChange={handleScaleChange} style={{
              padding: '5px',
              width: '100%',
              backgroundColor: '#fff',
              color: '#080f25'
            }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Cambiar imagen:</label>
            <input type="file" onChange={handleImageChange} style={{ width: '100%', backgroundColor: '#fff', color: '#080f25' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
