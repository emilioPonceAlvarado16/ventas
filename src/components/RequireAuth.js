import React, { useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';
import Account from './account';

// Componente que verifica si el usuario está autenticado antes de renderizar su contenido
function RequireAuth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
        const authListener = (event) => {
      if (event.payload.event === 'signOut') {
        setIsAuthenticated(false);
      }
    };

    Hub.listen('auth', authListener);


    checkAuth();
  }, );

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
    return <Account />;
  }
}

export default RequireAuth;
