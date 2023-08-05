import { Auth, Hub } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);  // Nuevo estado
  const [isSigningOut, setIsSigningOut] = useState(false);  // Nuevo estado para el proceso de cierre de sesión
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setCurrentUser(user);
        setIsAuthenticated(true);
      } catch (error) {
        setCurrentUser(null);
        setIsAuthenticated(false);
      }
      setIsLoading(false);  // Establecer isLoading a false cuando se completa la comprobación
    };

    const authListener = (data) => {
      switch(data.payload.event) {
        case 'signIn':
          checkAuth();
          break;
        case 'signOut':
          setCurrentUser(null);
          setIsAuthenticated(false);
          break;
      }
    };

    Hub.listen('auth', authListener);
    checkAuth();

    return () => {
      Hub.remove('auth', authListener);
    };
  }, []);

  const signIn = async (username, password) => {
    setIsLoading(true);

    try {
      const user = await Auth.signIn(username, password);
      setCurrentUser(user);
      setIsAuthenticated(true);
      router.push('/home'); // redirigir a /home después de un inicio de sesión exitoso
    } catch (error) {
      console.log('Error signing in:', error);
    }

    setIsLoading(false);
  };


  const signOut = async () => {
    setIsSigningOut(true);  // Establecer isSigningOut a true al inicio del cierre de sesión

    try {
      await Auth.signOut();
      setIsAuthenticated(false);
      localStorage.clear();
    } catch (error) {
      console.log('Error signing out:', error);
    }

    setIsSigningOut(false);  // Establecer isSigningOut a false cuando se completa el cierre de sesión
  };

  return { currentUser, isAuthenticated, signOut, signIn, isLoading, isSigningOut };  // Incluir signIn en los valores devueltos
}
