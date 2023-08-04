import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Login from './Login';
function RequireAuth({ children }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // Puedes renderizar algún contenido de carga aquí
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    // Puedes redirigir a una página de inicio de sesión o mostrar un mensaje de no autorizado
    return <Login />;
  }
}

export default RequireAuth;
