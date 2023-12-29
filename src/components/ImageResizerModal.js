import React, { useState, useRef } from 'react';
import Image from 'next/image';

export default function ImageResizeModal({ onClose }) {
  const modalRef = useRef();
  const [size, setSize] = useState({ width: 200, height: 200 });
  const [imageUrl, setImageUrl] = useState("./images/image1.png");

  // Simula el cambio de tamaño
  const handleResize = (e) => {
    const { name, value } = e.target;
    setSize({ ...size, [name]: Number(value) });
  };

  // Maneja el cambio de imagen
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
          <Image src={imageUrl} alt="Imagen a redimensionar" width={size.width} height={size.height} layout="responsive" />
        </div>
        <div style={{ width: '200px', padding: '10px', borderLeft: '1px solid #ddd' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Configuración de Tamaño</h3>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Ancho:</label>
            <input type="number" name="width" value={size.width} onChange={handleResize} style={{
              padding: '5px',
              width: '100%',
              backgroundColor: '#fff',
              color: '#080f25'
            }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Alto:</label>
            <input type="number" name="height" value={size.height} onChange={handleResize} style={{
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
