import { useState, useEffect } from 'react';

function PageTransition({ children }) {
  const [animationClass, setAnimationClass] = useState('animate__fadeIn'); // Estado inicial: final de la animación

  useEffect(() => {
    // Cambiar al estado inicial (oculto) después de un breve retraso
    const timer1 = setTimeout(() => setAnimationClass('animate__fadeIn'), 910); 

    // Luego, después de otro retraso, volver al estado final (visible) con una animación
    const timer2 = setTimeout(() => setAnimationClass('page-enter-active'), 900); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
   
    <div className={animationClass}>
      {children}
    </div>
  );
}

export default PageTransition;
