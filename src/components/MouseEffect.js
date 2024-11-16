// src/components/MouseEffect.js
import React, { useState, useEffect, useRef, useCallback } from 'react';

// Definir un contador fuera del componente para mantener el estado entre renderizados
let particleId = 0;

// Función para crear una nueva partícula
const createParticle = (x, y) => ({
  id: particleId++, // Asignar un id único
  x, 
  y, 
  alpha: 1, 
  size: Math.random() * 10 + 1, 
  color: Math.random() < 0.5 ? 'rgba(255, 223, 0, ALPHA)' : 'rgba(0, 0, 139, ALPHA)' // Color amarillo o azul oscuro
});

// Función para actualizar cada partícula
const decreaseAlphaAndMove = (particle) => ({
  ...particle,
  alpha: particle.alpha - 0.02,
  y: particle.y - 1,
});

// Función para filtrar partículas visibles
const isVisible = (particle) => particle.alpha > 0;

const MouseEffect = () => {
  const [particles, setParticles] = useState([]);
  const lastTimeRef = useRef(Date.now());

  // Memorizar la función updateParticles
  const updateParticles = useCallback(() => {
    setParticles((currentParticles) => 
      currentParticles
        .map(decreaseAlphaAndMove)
        .filter(isVisible)
    );
  }, []);

  // Memorizar la función moveHandler
  const moveHandler = useCallback((e) => {
    const now = Date.now();
    if (now - lastTimeRef.current > 100) { // Controla la frecuencia de generación de partículas
      const newParticle = createParticle(e.clientX, e.clientY);
      setParticles(prev => [newParticle, ...prev]);
      lastTimeRef.current = now;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', moveHandler);
    const interval = setInterval(updateParticles, 50);

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      clearInterval(interval);
    };
  }, [moveHandler, updateParticles]); // Añadir dependencias

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id} 
          style={{
            position: 'fixed',
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            backgroundColor: particle.color.replace('ALPHA', particle.alpha.toString()),
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.7)' // Añade brillo a las partículas
          }}
        />
      ))}
    </>
  );
};

export default MouseEffect;
