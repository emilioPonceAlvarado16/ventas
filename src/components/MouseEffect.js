// src/components/MouseEffect.js
import React, { useState, useEffect } from 'react';

// Definir un contador fuera del componente para mantener el estado entre renderizados
let particleId = 0;

const createParticle = (x, y) => ({
  id: particleId++, // Asignar un id único
  x, 
  y, 
  alpha: 1, 
  size: Math.random() * 10 + 1, 
  color: Math.random() < 0.5 ? 'rgba(255, 223, 0, ALPHA)' : 'rgba(0, 0, 139, ALPHA)' // Color amarillo o azul oscuro
});

const MouseEffect = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const updateParticles = () => {
      setParticles((particles) =>
        particles
          .map(p => ({ ...p, alpha: p.alpha - 0.02, y: p.y - 1 }))
          .filter(p => p.alpha > 0)
      );
    };

    let lastTime = Date.now();

    const moveHandler = (e) => {
      const now = Date.now();
      if (now - lastTime > 100) { // Controla la frecuencia de generación de partículas
        const newParticle = createParticle(e.clientX, e.clientY);
        setParticles(prev => [newParticle, ...prev]);
        lastTime = now;
      }
    };

    window.addEventListener('mousemove', moveHandler);
    const interval = setInterval(updateParticles, 50);

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      clearInterval(interval);
    };
  }, []);

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
