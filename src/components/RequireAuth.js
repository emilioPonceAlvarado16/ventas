import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

// Componente que verifica si el usuario está autenticado antes de renderizar su contenido
function RequireAuth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      await Auth.currentAuthenticatedUser();
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    // Puedes redirigir a una página de inicio de sesión o mostrar un mensaje de no autorizado
    return <p>No estás autorizado para ver este contenido.</p>;
  }
}

export default RequireAuth;
