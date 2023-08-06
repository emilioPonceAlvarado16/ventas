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


  const signUp = async (username, password, email, name) => {
    setIsLoading(true); // Establecer isLoading a true durante el registro
  
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // atributo opcional
          name, // atributo personalizado
        },
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  
    setIsLoading(false); // Establecer isLoading a false cuando se completa el registro
  };
  

  return { currentUser, isAuthenticated, signOut, signIn, signUp ,isLoading, isSigningOut };  // Incluir signIn en los valores devueltos
}
