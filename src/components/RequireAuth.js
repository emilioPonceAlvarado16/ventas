import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';
import Login from './Login';
import Loading from './Loading';

function RequireAuth({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated]);

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    if (!children) {
      router.push('/home');
      return <Loading />;
    }
    return <>{children}</>;
  }

  // Aquí ya no sería necesario devolver el componente Login
  // porque si el usuario no está autenticado, ya se habría redirigido a la página de login.
  return null;
}

export default RequireAuth;
