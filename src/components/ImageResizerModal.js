// src/components/ImageResizerModal.js

import React, { useState, useEffect, useRef } from 'react';

export default function ImageResizeModal(props) {
  const dialogRef = useRef(null);
  const onClose = props.onClose || (() => {});
  const imageUrl = props.imageUrl || "";
  const imageObj = props.imageObj || {};
  const [scale, setScale] = useState(imageObj?.scale ? imageObj.scale : 0.4); // Almacena la escala actual de la imagen
  const updateField = props.updateField || (() => {});
  const [originalSize, setOriginalSize] = useState({ width: 200, height: 200 }); // Tamaño original de la imagen

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      // Abrir el diálogo de forma modal
      dialog.showModal();

      // Enfocar el botón de cierre cuando el diálogo se abre
      const closeButton = dialog.querySelector('#close-button');
      if (closeButton) {
        closeButton.focus();
      }

      // Manejar el cierre del diálogo
      const handleClose = () => {
        dialog.close();
        onClose();
      };

      // Escuchar el evento de cierre del diálogo
      dialog.addEventListener('close', handleClose);

      // Manejar la tecla Escape para cerrar el diálogo
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };
      dialog.addEventListener('keydown', handleKeyDown);

      return () => {
        dialog.removeEventListener('close', handleClose);
        dialog.removeEventListener('keydown', handleKeyDown);
      };
    }
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
    const newScale = Number(e.target.value);
    setScale(newScale);
    updateField(imageObj.id, { scale: newScale });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      // Aquí puedes manejar la lógica para actualizar la imagen según tus necesidades
      // Por ejemplo, podrías llamar a una función prop para actualizar la imagen en el estado padre
      // props.updateImage(newImageUrl);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="image-resizer-modal-title"
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#080f25',
        color: 'white',
        zIndex: 1000,
        width: '800px',
        height: '600px',
        overflow: 'auto',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.23)',
        border: '1px solid #ddd',
        borderRadius: '10px'
      }}
    >
      <div style={{ marginBottom: '10px', textAlign: 'right' }}>
        <button
          id="close-button"
          onClick={() => {
            const dialog = dialogRef.current;
            if (dialog) {
              dialog.close();
            }
          }}
          style={{
            fontSize: '16px',
            padding: '5px 10px',
            backgroundColor: '#FFC107',
            color: '#080f25',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          aria-label="Cerrar modal de redimensionamiento de imagen"
        >
          Cerrar
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        <div style={{ flex: 1, padding: '10px', overflow: 'hidden' }}>
          <img
            src={imageUrl}
            alt="Imagen a redimensionar"
            style={{
              width: `${originalSize.width * scale}px`,
              height: `${originalSize.height * scale}px`
            }}
          />
        </div>
        <div style={{ width: '200px', padding: '10px', borderLeft: '1px solid #ddd' }}>
          <h3 id="image-resizer-modal-title" style={{ margin: '0 0 10px 0' }}>Configuración de Escala</h3>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="scale-input" style={{ display: 'block', marginBottom: '5px' }}>Escala:</label>
            <input
              id="scale-input"
              type="number"
              min="0.1"
              step="0.1"
              value={scale}
              onChange={handleScaleChange}
              style={{
                padding: '5px',
                width: '100%',
                backgroundColor: '#fff',
                color: '#080f25'
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="image-upload" style={{ display: 'block', marginBottom: '5px' }}>Cambiar imagen:</label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{
                padding: '5px',
                width: '100%',
                backgroundColor: '#fff',
                color: '#080f25'
              }}
            />
          </div>
        </div>
      </div>
    </dialog>
  );
}
